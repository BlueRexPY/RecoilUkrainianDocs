---
title: useGotoRecoilSnapshot(snapshot)
sidebar_label: useGotoRecoilSnapshot()
---

Цей хук повертає колбек, який приймає [`Snapshot`](/docs/api-reference/core/Snapshot) як параметр іта оновить поточний стан [`<RecoilRoot>`](/docs/api-reference/core/RecoilRoot) для відповідності зі станом атома.

```jsx
function useGotoRecoilSnapshot(): Snapshot => void
```

### Приклад транзакції

**Важлива зауваження**: Цей приклад не є ефективним, оскільки він підписує компонент на повторний рендерінг при усіх змінах стану.

```jsx
function TransactionButton(): React.Node {
  const snapshot = useRecoilSnapshot(); // Підписка на будь-які зміни стану
  const modifiedSnapshot = snapshot.map(({set}) => {
    set(atomA, x => x + 1);
    set(atomB, x => x * 2);
  });
  const gotoSnapshot = useGotoRecoilSnapshot();
  return <button onClick={() => gotoSnapshot(modifiedSnapshot)}>Perform Transaction</button>;
}
```

### Подорож у часі

Дивіться приклад використання інструментів розробника для [подорожі у часі](/docs/guides/dev-tools#time-travel).



