---
title: React 18 Переходи
sidebar_label: Переходи
---

[React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html) пропонує новий хук [**`useTransition()`**](https ://reactjs.org/docs/react-api.html#transitions) для переходу до нового стану, одночасно маючи контроль над тим, що відображати, перш ніж новий стан буде готовий. Recoil має бути сумісним із цим підходом і надавати узгоджене подання зі станом React. Однак React 18 може відмовитися від одночасних оновлень і ще офіційно не підтримує ініціювання переходів на основі змін стану до зовнішніх сховищ. Це те, що команда React шукає для підтримки, але до того часу ми додали експериментальну підтримку для цього за допомогою наступних хуків; інші хуки вже повинні повністю підтримувати переходи, тому необхідні лише ці варіанти. Цей API вважається експериментальним, оскільки можуть бути випадки використання, які ми не знайшли, і які не обробляються.

* **`useRecoilState_TRANSITION_SUPPORT_UNSTABLE()`**
* **`useRecoilValue_TRANSITION_SUPPORT_UNSTABLE()`**
* **`useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE()`**

Ось приклад, який відображає поточні результати запиту під час завантаження нового результату:
```jsx
function QueryResults() {
  const queryParams = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(queryParamsAtom);
  const results = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(myQuerySelector(queryParams));
  return results;
}

function MyApp() {
  const [queryParams, setQueryParams] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(queryParamsAtom);
  const [inTransition, startTransition] = useTransition();
  return (
    <div>
      {inTransition ? <div>[Завантаження нових результатів...]</div> : null}

      Результат: <React.Suspense><QueryResults /></React.Suspense>

      <button
        onClick={() => {
          startTransition(() => {
            setQueryParams(...new params...);
          });
        }
      >
        Почати новий запит
      </button>
    </div>
  );
}
```
