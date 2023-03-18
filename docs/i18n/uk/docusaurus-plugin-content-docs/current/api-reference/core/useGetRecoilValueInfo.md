---
title: useGetRecoilValueInfo_UNSTABLE()
sidebar_label: useGetRecoilValueInfo()
---

Цей хук дозволяє компоненту «підглядати» за поточним станом, значенням та іншою інформацією про атом або селектор. Це схоже на метод `getInfo_UNSTABLE()` в [`Snapshot`]. Цей хук дозволяє компоненту «підглядати» поточний стан, значення та іншу інформацію про атом або селектор. Це схоже на метод `getInfo_UNSTABLE()` в [`Snapshot`](/docs/api-reference/core/Snapshot#debug-information) і [атомні ефекти](/docs/guides/atom-effects)


```jsx
function useGetRecoilValueInfo_UNSTABLE(): RecoilValue<T> => RecoilValueInfo<T>;

interface RecoilValueInfo<T> {
  loadable?: Loadable<T>;
  isActive: boolean;
  isSet: boolean;
  isModified: boolean; // TODO звіт про змінені селектори
  type: 'atom' | 'selector';
  deps: Iterable<RecoilValue<T>>;
  subscribers: {
    nodes: Iterable<RecoilValue<T>>,
    components: Iterable<ComponentInfo>,
  };
}

interface ComponentInfo {
  name: string;
}
```

Він надає функцію, якій можна передати `RecoilValue<T>` і повертає об’єкт, який містить поточну інформацію про цей атом/селектор. Це не призведе до зміни стану або створення будь-яких підписок. В основному він призначений для використання в інструментах налагодження або розробника.

Інформація про налагодження змінюється, але може містити:
* `loadable` - Завантажуваний з поточним станом. На відміну від таких методів, як `getLoadable()`, цей метод взагалі не змінюватиме знімок. Він надає поточний стан і не буде ініціалізувати нові атоми/селектори, виконувати будь-які нові оцінки селекторів або оновлювати будь-які залежності чи підписки.
* `isSet` - True, якщо це атом із явним значенням, що зберігається у стані знімка. False, якщо це селектор або використовується стандартний стан атома.
* `isModified` - True, якщо це атом, який було змінено після останньої транзакції.
* `type` – або `атом`, або `селектор`
* `deps` – ітератор над атомами або селекторами, від яких залежить цей вузол.
* `subscribers` - інформація про те, що підписується на цей вузол для цього знімка. Деталі в розробці.

### Приклад

```jsx
function ButtonToShowCurrentSubscriptions() {
  const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
  function onClick() {
    const {subscribers} = getRecoilValueInfo(myAtom);
    console.debug(
      'Поточні абонентські вузли:',
      Array.from(subscribers.nodes).map(({key}) => key),
    );
  }

  return <button onClick={onClick} >Перегляньте поточні підписки</button>;
}
```
