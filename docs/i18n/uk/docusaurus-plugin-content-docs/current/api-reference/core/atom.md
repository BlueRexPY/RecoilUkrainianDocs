---
title: atom(параметри)
sidebar_label: atom()
---

*Атом* представляє стан у Recoil. Функція atom() повертає записуваний об’єкт RecoilState.
---

```jsx
function atom<T>({
  key: string,

  default?: T | Promise<T> | Loadable<T> | WrappedValue<T> | RecoilValue<T>,

  effects?: $ReadOnlyArray<AtomEffect<T>>,

  dangerouslyAllowMutability?: boolean,
}): RecoilState<T>
```

  - `key` - унікальне текстове значення, яке використовується для внутрішньої ідентифікації атома. Це значення має бути унікальним щодо інших атомів і селекторів у всій програмі.
  - `default` - Початкове значення атома. Це також може бути `Promise`, [`Loadable`](/docs/api-reference/core/Loadable), обгорнуте значення або інший атом або селектор того самого типу, що представляє значення за замовчуванням.
     - Якщо селектор використовується як стандартний, атом буде динамічно оновлюватись, коли оновлюється стандартний селектор. Коли атом встановлено, він збереже це значення, доки атом не буде скинуто.
     - Якщо `default` не вказано, на відміну від значення, яке може включати `null` або `undefined`, атом запускатиметься в стані очікування та запускатиме Suspense, доки його не буде встановлено.
     - Якщо ви бажаєте встановити значення атома за замовчуванням безпосередньо для `Promise`, `Loadable`, atom, selector або функції, не розгортаючи його, ви можете обернути його за допомогою `atom.value(...)`.
   - `effects` - додатковий масив [Atom Effects](/docs/guides/atom-effects) для атома.
   - `dangerouslyAllowMutability` - у деяких випадках може бути бажаним дозволити мутацію об’єктів, що зберігаються в атомах, які не представляють зміни стану. Використовуйте цей параметр, щоб перевизначити заморожування об’єктів у режимі розробки.

---

Recoil керує змінами стану атома, щоб знати, коли сповіщати компоненти, які підписалися на цей атом, для повторного відтворення, тому вам слід використовувати хуки, перелічені нижче, щоб змінити стан атома. Якщо об’єкт, що зберігається в атомі, мутував безпосередньо, він може обійти це та спричинити зміни стану без належного сповіщення компонентів, які підписуються. Щоб допомогти виявити такі помилки, Recoil заморозить об’єкти, що зберігаються в атомах у режимі розробки.

Найчастіше ви будете використовувати такі хуки для взаємодії з атомами:

- [`useRecoilState()`](/docs/api-reference/core/useRecoilState): використовуйте цей хук, якщо ви збираєтеся як читати, так і писати в атом. Цей хук підписує компонент на атом.
- [`useRecoilValue()`](/docs/api-reference/core/useRecoilValue): використовуйте цей хук, якщо ви збираєтеся лише читати атом. Цей хук підписує компонент на атом.
- [`useSetRecoilState()`](/docs/api-reference/core/useSetRecoilState): використовуйте цей хук, якщо ви збираєтеся лише писати в атом.
- [`useResetRecoilState()`](/docs/api-reference/core/useResetRecoilState): використовуйте цей хук, щоб скинути атом до його значення за замовчуванням.
У рідкісних випадках, коли вам потрібно прочитати значення атома без підписки на компонент, див. [`useRecoilCallback()`](/docs/api-reference/core/useRecoilCallback).

Ви можете ініціалізувати атом або за допомогою статичного значення, або за допомогою `Promise` чи `RecoilValue`, що представляє значення того самого типу. Оскільки `Promise` може бути в очікуванні або селектор за замовчуванням може бути асинхронним, це означає, що значення atom також може бути в очікуванні або викликати помилку під час читання. Зауважте, що наразі ви не можете призначити `Promise` під час встановлення атома. Використовуйте [селектори](/docs/api-reference/core/selector) для асинхронних функцій.

Атоми не можна використовувати для безпосереднього зберігання `Promise` або `RecoilValue`, але вони можуть бути загорнуті в об'єкт. Зауважте, що `Promise` може бути змінним. Atoms можна налаштувати на `функцію`, якщо вона є чистою, але для цього вам може знадобитися використовувати форму оновлення сеттерів. (наприклад, `set(myAtom, () => myFunc);`).

### Example

```jsx
import {atom, useRecoilState} from 'recoil';

const counter = atom({
  key: 'myCounter',
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(counter);
  const incrementByOne = () => setCount(count + 1);

  return (
    <div>
      Лічильник: {count}
      <br />
      <button onClick={incrementByOne}>Додати одиницю</button>
    </div>
  );
}
```

## Atom Families

[`atomFamily()`](/docs/api-reference/utils/atomFamily) може бути використано для збирання колекції статей, що related, або [визначення стану вашого атома](/docs/api-reference/utils/atomFamily#scoped-atoms).