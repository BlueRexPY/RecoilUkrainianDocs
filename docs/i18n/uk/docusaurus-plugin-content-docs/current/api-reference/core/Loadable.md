---
title: клас Loadable
sidebar_label: Loadable
---

Об’єкт `Loadable` представляє поточний стан Recoil [Aтом](/docs/api-reference/core/atom) або [селектор](/docs/api-reference/core/selector). Цей стан може або мати доступне значення, може перебувати в стані помилки або все ще очікувати асинхронного вирішення. `Завантажуваний` має такий інтерфейс:

- `state`: поточний стан атома або селектора. Можливі значення: `'hasValue'`, `'hasError'` або `'loading'`.
- `contents`: значення, представлене цим `Loadable`. Якщо стан `hasValue`, це фактичне значення, якщо стан `hasError`, це генерований об’єкт `Error`, а якщо стан `loading`, то `Promise` значення.

Завантажувані також містять допоміжні методи для доступу до поточного стану. *Вважайте цей API нестабільним*:

- `getValue()` - метод доступу до значення, яке відповідає семантиці селекторів React Suspense і Recoil. Якщо стан має значення, він повертає значення, якщо він має помилку, тоді він викидає цю помилку, а якщо він все ще очікує на розгляд, він призупиняє виконання або візуалізацію для поширення стану очікування.
- `toPromise()`: повертає `Promise`, який буде вирішено, коли селектор вирішить. Якщо селектор є синхронним або вже вирішив, він повертає `Promise`, який вирішує негайно.
- `valueMaybe()` - Повертає значення, якщо воно доступне, інакше повертає `undefined`
- `valueOrThrow()` - повертає значення, якщо воно доступне, або видає помилку.
- `map(callback)` — використовує функцію для перетворення значення Loadable і повертає новий `Loadable` із перетвореним значенням. Функція перетворення отримує параметр значення батьківського Loadable, і ви можете повернути нове значення для нового Loadable; він також поширює викинуті помилки або очікування. Ваша функція зворотного виклику може повертати нове значення, `Promise` або `Loadable` нового значення, або вона може викликати помилку. Цей метод можна порівняти з `.then()` для Promises.

### Приклад

```jsx
function UserInfo({userID}) {
  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));
  switch (userNameLoadable.state) {
    case 'hasValue':
      return <div>{userNameLoadable.contents}</div>;
    case 'loading':
      return <div>завантажується...</div>;
    case 'hasError':
      throw userNameLoadable.contents;
  }
}
```

## Створення Loadables

Інтерфейс `RecoilLoadable` можна імпортувати для створення власних об’єктів `Loadable`.

```jsx
interface RecoilLoadable {
  function of<T>(T | Promise<T>, Loadable<T>): Loadable<T>;
  function error<T>(mixed): Loadable<T>;
  function all(Array<mixed | Loadable<mixed> | Promise<mixed>>): Loadable<Array<mixed>>;
  function all({[string]: mixed | Loadable<mixed> | Promise<mixed>}): Loadable<{[string]: mixed}>;
  function loading(): Loadable<empty>;
  function isLoadable(mixed): boolean;
}
```

### Приклад

```jsx
RecoilLoadable.of(123);

RecoilLoadable.error(new Error('ПОМИЛКА'));

RecoilLoadable.all([
  RecoilLoadable.of(1),
  RecoilLoadable.of(10),
  RecoilLoadable.of(100),
]).map(([a, b, c]) => a+b+c);
```

Завантажувані значення можуть представляти асинхронні значення:

```jsx
// Асинхронно вирішується до 123
RecoilLoadable.of(Promise.resolve(123));
```

Подібно до `Promise.resolve()`, `RecoilLoadable.of()` може приймати літеральні значення, а також Loadables або Promises, які будуть розпаковані:

```jsx
// Усі перетворюються на 'x'
RecoilLoadable.of('x');
RecoilLoadable.of(RecoilLoadable.of('x'));
RecoilLoadable.of(Promise.resolve('x'));
```

Подібно до `Promise.all()`, `RecoilLoadable.all()` може приймати масиви значень Loadables, Promises або літеральних значень:

```jsx
// вирішується до [1, 2, 3]
RecoilLoadable.all([1, RecoilLoadable.of(2), Promise.resolve(3)]);

// Вирішується як {value: 1, loadable: 2, promise: 3}
RecoilLoadable.all({
  value: 1,
  loadable: RecoilLoadable.of(2),
  promise: Promise.resolve(3),
});

// Ніколи не вирішується
RecoilLoadable.loading();
```
