---
title: selector(параметри)
sidebar_label: selector()
---

*Селектори* представляють функцію або **похідний стан** у Recoil. Ви можете думати про них як про "ідемпотентну" або "чисту функцію" без побічних ефектів, яка завжди повертає те саме значення для заданого набору значень залежностей. Якщо надається лише функція `get`, селектор доступний лише для читання та повертає об’єкт `RecoilValueReadOnly`. Якщо також надано `set`, він повертає записуваний об’єкт `RecoilState`.

Recoil керує змінами стану атома та селектора, щоб знати, коли повідомляти компоненти, які підписалися на цей селектор, для повторного рендерингу. Якщо значення об’єкта селектора мутовано напряму, це може обійти це й уникнути належного сповіщення компонентів, що підписуються. Щоб допомогти виявити помилки, Recoil заморозить об’єкти значень селектора в режимі розробки.

---
```jsx
function selector<T>({
  key: string,

  get: ({
    get: GetRecoilValue,
    getCallback: GetCallback,
  }) => T | Promise<T> | Loadable<T> | WrappedValue<T> | RecoilValue<T>,

  set?: (
    {
      get: GetRecoilValue,
      set: SetRecoilState,
      reset: ResetRecoilState,
    },
    newValue: T | DefaultValue,
  ) => void,

  dangerouslyAllowMutability?: boolean,
  cachePolicy_UNSTABLE?: CachePolicy,
})
```

```jsx
type ValueOrUpdater<T> = T | DefaultValue | ((prevValue: T) => T | DefaultValue);
type GetCallback =
  <Args, Return>(
    callback: CallbackInterface => (...Args) => Return,
  ) => (...Args) => Return;

type GetRecoilValue = <T>(RecoilValue<T>) => T;
type SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;
type ResetRecoilState = <T>(RecoilState<T>) => void;

type CachePolicy =
  | {eviction: 'lru', maxSize: number}
  | {eviction: 'keep-all'}
  | {eviction: 'most-recent'};
```

- `key` - унікальне текстове значення, яке використовується для внутрішньої ідентифікації селектора. Це значення має бути унікальним щодо інших атомів і селекторів у всій програмі. Він повинен бути стабільним під час виконання, якщо він використовується для збереження.
- `get` - функція, яка обчислює значення для похідного стану. Він може повертати значення безпосередньо, асинхронний `Promise`, `Loadable` або інший атом чи селектор, що представляє той самий тип. Щоб встановити значення селектора безпосередньо на щось на зразок `Promise` або `Loadable`, ви можете обернути його за допомогою `selector.value(...)`. Цей зворотній виклик передається об’єкту як перший параметр, що містить такі властивості:
   - `get()` - функція, яка використовується для отримання значень з інших атомів/селекторів. Усі атоми/селектори, передані цій функції, будуть неявно додані до списку **залежностей** для селектора. Якщо будь-яка залежність селектора зміниться, селектор переоцінить.
   - `getCallback()` - функція для створення зворотних викликів з урахуванням Recoil за допомогою [інтерфейсу зворотного виклику](/docs/api-reference/core/useRecoilCallback#callback-interface). Див. [приклад](/docs/api-reference/core/selector#returning-objects-with-callbacks) нижче.
- `set?` - якщо ця властивість встановлена, селектор повертатиме **записуваний** стан. Функція, якій передається об’єкт зворотних викликів як перший параметр і нове вхідне значення. Вхідне значення може бути значенням типу "T" або, можливо, об'єктом типу "DefaultValue", якщо користувач скинув селектор. Зворотні виклики включають:
   - `get()` - функція, яка використовується для отримання значень з інших атомів/селекторів. Ця функція не підпише селектор на дані атоми/селектори.
   - `set()` - функція, яка використовується для встановлення значень стану віддачі вгорі. Перший параметр — стан віддачі, а другий — нове значення. Нове значення може бути функцією оновлення або об’єктом `DefaultValue` для поширення дій скидання.
   - `reset()` - функція, яка використовується для скидання до значень за замовчуванням стану віддачі вгорі. Єдиним параметром є стан віддачі.
- `dangerouslyAllowMutability` - у деяких випадках може бути бажаним дозволити зміну об’єктів, що зберігаються в селекторах, які не представляють зміни стану. Використовуйте цей параметр, щоб перевизначити заморожування об’єктів у режимі розробки.
- `cachePolicy_UNSTABLE` - визначає поведінку внутрішнього кешу селектора. Може бути корисним для керування обсягом пам’яті в програмах, які мають селектори з багатьма змінними залежностями.
   - `eviction` - може бути встановлено на `lru` (що вимагає встановлення `maxSize`), `keep-all` (за замовчуванням) або `most-recent`. Кеш `lru` видалить найменше використовуване значення з кешу селектора, коли розмір кешу перевищує `maxSize`. Політика `keep-all` означатиме, що всі залежності селектора та їхні значення зберігатимуться в кеші селектора необмежений час. «Остання» політика використовуватиме кеш розміром 1 і збереже лише останній збережений набір залежностей та їхні значення.
   - Зауважте, що кеш зберігає значення селектора на основі ключа, що містить усі залежності та їхні значення. Це означає, що розмір внутрішнього кешу селектора залежить як від розміру значень селектора, так і від кількості унікальних значень усіх залежностей.
   - Зауважте, що стандартна політика виселення (наразі `keep-all`) може змінитися в майбутньому.

---

Селектор із простою статичною залежністю:

```jsx
const mySelector = selector({
  key: 'MySelector',
  get: ({get}) => get(myAtom) * 100,
});
```

### Динамічні залежності

Селектор лише для читання має метод `get`, який оцінює значення селектора на основі залежностей. Якщо будь-яку з цих залежностей оновлено, селектор переоцінить. Залежності визначаються динамічно на основі атомів або селекторів, які ви фактично використовуєте під час оцінки селектора. Залежно від значень попередніх залежностей, ви можете динамічно використовувати різні додаткові залежності. Recoil автоматично оновить поточний графік потоку даних, щоб селектор підписувався лише на оновлення поточного набору залежностей

У цьому прикладі `mySelector` залежатиме від атома `toggleState`, а також `selectorA` або `selectorB` залежно від стану `toggleState`.
```jsx
const toggleState = atom({key: 'Toggle', default: false});

const mySelector = selector({
  key: 'MySelector',
  get: ({get}) => {
    const toggle = get(toggleState);
    if (toggle) {
      return get(selectorA);
    } else {
      return get(selectorB);
    }
  },
});
```

### Селектори доступні для запису

Двонаправлений селектор отримує вхідне значення як параметр і може використовувати його для передачі змін угору вздовж графа потоку даних. Оскільки користувач може встановити селектор із новим значенням або скинути селектор, вхідне значення буде або того самого типу, що представляє селектор, або об’єкта DefaultValue, який представляє дію скидання.

Цей простий селектор по суті обертає атом, щоб додати додаткове поле. Він просто проходить через операції встановлення та скидання до вищестоящого атома.
```jsx
const proxySelector = selector({
  key: 'ProxySelector',
  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),
  set: ({set}, newValue) => set(myAtom, newValue),
});
```

Цей селектор перетворює дані, тому йому потрібно перевірити, чи є вхідне значення `DefaultValue`.
```jsx
const transformSelector = selector({
  key: 'TransformSelector',
  get: ({get}) => get(myAtom) * 100,
  set: ({set}, newValue) =>
    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),
});
```

### Асинхронні селектори

Селектори також можуть мати асинхронні функції обчислення та повертати `Promise` до вихідного значення. Перегляньте [цей посібник](/docs/guides/asynchronous-data-queries) для отримання додаткової інформації.
```jsx
const myQuery = selector({
  key: 'MyQuery',
  get: async ({get}) => {
    return await myAsyncQuery(get(queryParamState));
  }
});
```

### Приклад (синхронний)

```jsx
import {atom, selector, useRecoilState, DefaultValue, useResetRecoilState} from 'recoil';

const tempFahrenheit = atom({
  key: 'tempFahrenheit',
  default: 32,
});

const tempCelsius = selector({
  key: 'tempCelsius',
  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({set}, newValue) =>
    set(
      tempFahrenheit,
      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
    ),
});

function TempCelsius() {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const [tempC, setTempC] = useRecoilState(tempCelsius);
  const resetTemp = useResetRecoilState(tempCelsius);

  const addTenCelsius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);
  const reset = () => resetTemp();

  return (
    <div>
      Температура за (Цельсієм): {tempC}
      <br />
      Температура за (Фаренгейтом): {tempF}
      <br />
      <button onClick={addTenCelsius}>Додайте 10 градусів за Цельсієм</button>
      <br />
      <button onClick={addTenFahrenheit}>Додайте 10 градусів за Фаренгейтом</button>
      <br />
      <button onClick={reset}>Скинути</button>
    </div>
  );
}
```

### Приклад (асинхронний)

```jsx
import {selector, useRecoilValue} from 'recoil';

const myQuery = selector({
  key: 'MyDBQuery',
  get: async () => {
    const response = await fetch(getMyRequestUrl());
    return response.json();
  },
});

function QueryResults() {
  const queryResults = useRecoilValue(myQuery);

  return (
    <div>
      {queryResults.foo}
    </div>
  );
}

function ResultsSection() {
  return (
    <React.Suspense fallback={<div>завантажується...</div>}>
      <QueryResults />
    </React.Suspense>
  );
}
```
Перегляньте [цей посібник](/docs/guides/asynchronous-data-queries), щоб отримати більш складні приклади.

### Повернення об'єктів із зворотними викликами

Іноді селектори можна використовувати для повернення об’єктів, які містять зворотні виклики. Ці зворотні виклики можуть бути корисними для доступу до стану Recoil, наприклад для запиту значень упередженого введення або обробників клацань. У наступному прикладі використовується селектор для створення пунктів меню з обробником клацання, який отримує доступ до стану Recoil. Це може бути корисно під час передачі цих об’єктів фреймворкам або логіці поза контекстом компонента React.

Існує симетрія між цим зворотним викликом і використанням [`useRecoilCallback()`](/docs/api-reference/core/useRecoilCallback). Зауважте, що колбек, який повертає `getCallback()`, можна використовувати як асинхронний колбек для доступу до стану Recoil пізніше, його не слід викликати під час оцінки самого значення селектора.

```jsx
const menuItemState = selectorFamily({
  key: 'MenuItem',
  get: itemID => ({get, getCallback}) => {
    const name = get(itemNameQuery(itemID));
    const onClick = getCallback(({snapshot}) => async () => {
      const info = await snapshot.getPromise(itemInfoQuery(itemID));
      displayInfoModal(info);
    });
    return {
      title: `Показати інформацію для ${name}`,
      onClick,
    };
  },
});
```

Приклад, який може змінювати стан:

```jsx
const menuItemState = selectorFamily({
  key: 'MenuItem',
  get: itemID => ({get, getCallback}) => {
    const name = get(itemNameQuery(itemID));
    const onClick = getCallback(({refresh}) => () => {
      refresh(itemInfoQuery(itemID));
    });
    return {
      title: `Оновити дані для ${name}`,
      onClick,
    };
  },
});
```

## Конфігурація політики кешу

Властивість `cachePolicy_UNSTABLE` дозволяє вам налаштувати поведінку кешування внутрішнього кешу селектора. Ця властивість може бути корисною для зменшення пам’яті в програмах, які мають велику кількість селекторів, які мають велику кількість змінних залежностей. Наразі єдиним параметром, який можна налаштувати, є `виселення`, але ми можемо додати більше в майбутньому.

Нижче наведено приклад того, як ви можете використовувати цю нову властивість:

```jsx
const clockState = selector({
  key: 'clockState',
  get: ({get}) => {
    const hour = get(hourState);
    const minute = get(minuteState);
    const second = get(secondState); // запускатиметься щосекунди

    return `${hour}:${minute}:${second}`;
  },
  cachePolicy_UNSTABLE: {
    // Зберігайте лише останній набір залежностей та їхні значення
    eviction: 'most-recent',
  },
});
```

У наведеному вище прикладі `clockState` перераховує кожну секунду, додаючи новий набір значень залежностей до внутрішнього кешу, що з часом може призвести до проблеми з пам’яттю, оскільки внутрішній кеш зростає нескінченно. Використовуючи політику вилучення `найновіших`, внутрішній кеш селектора зберігатиме лише останній набір залежностей та їхні значення разом із фактичним значенням селектора на основі цих залежностей, таким чином вирішуючи проблему пам’яті.

Поточні варіанти виселення:
- `lru` - витісняє значення, яке найменше використовувалося з кешу, якщо розмір перевищує `maxSize`.
- `найновіший` - зберігає лише останнє значення.
- `keep-all` (*за замовчуванням*) — зберігає всі записи в кеші та не вилучає.

> **_ПРИМІТКА:_** *Політика виселення за умовчанням (наразі `keep-all`) може змінитися в майбутньому.*
