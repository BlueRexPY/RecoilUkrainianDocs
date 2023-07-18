---
title: useResetRecoilState(state)
sidebar_label: useResetRecoilState()
---

Повертає функцію, яка скине значення даного стану до значення за замовчуванням.

Використання `useResetRecoilState()` дозволяє компоненту скинути стан до значення за замовчуванням без підписки компонента на повторне відтворення щоразу, коли стан змінюється.

---

```jsx
function useResetRecoilState<T>(state: RecoilState<T>): () => void;
```

- `state`: Recoil-стан, до якого можна записувати значення

### Приклад

```jsx
import {todoListState} from "../atoms/todoListState";

const TodoResetButton = () => {
  const resetList = useResetRecoilState(todoListState);
  return <button onClick={resetList}>Reset</button>;
};
```
