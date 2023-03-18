---
title: Селектори
---

**Селектор** представляє частину **похідного стану**. Ви можете розглядати похідний стан як результат передачі стану до чистої функції, яка отримує нове значення із зазначеного стану.

Похідний стан — потужна концепція, оскільки вона дозволяє нам створювати динамічні дані, які залежать від інших даних. У контексті нашого додатка зі списком справ наступне вважається похідним станом:

- **Відфільтрований список завдань**: отримано з повного списку завдань шляхом створення нового списку, у якому певні елементи відфільтровано на основі певних критеріїв (наприклад, відфільтрування вже виконаних елементів).

- **Статистика списку завдань**: отримана з повного списку завдань шляхом обчислення корисних атрибутів списку, таких як загальна кількість елементів у списку, кількість виконаних завданьта їх відсоток.

Щоб реалізувати відфільтрований список завдань, нам потрібно вибрати набір критеріїв фільтра, значення яких можна зберегти в атомі. Параметри фільтра, які ми використовуватимемо: "Показати все", "Показати завершені" та "Показати незавершені". Стандартним значенням буде "Показати все":

```javascript
const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});
```

Використовуючи `todoListFilterState` і `todoListState`, ми можемо створити селектор `filteredTodoListState`, який отримує відфільтрований список:

```javascript
const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Показати завершені':
        return list.filter((item) => item.isComplete);
      case 'Показати незавершені':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
```

`filteredTodoListState` внутрішньо відстежує дві залежності: `todoListFilterState` та `todoListState`, тому виконується повторно, якщо будь-яка з них змінюється.

> З точки зору компонента, селектори можна читати за допомогою тих самих хуків, які використовуються для читання атомів. Однак важливо зауважити, що певні хуки працюють лише з **станом для запису** (тобто `useRecoilState()`). Усі атоми перебувають у стані, доступному для запису, але лише деякі селектори вважаються станом, доступним для запису (селектори, які мають властивості `get` і `set`). Перегляньте сторінку [Основні концепції](/docs/introduction/core-concepts) для отримання додаткової інформації з цієї теми.

Відобразити наш відфільтрований todoList так само просто, як змінити один рядок у компоненті `TodoList`:

```jsx
function TodoList() {
  // змінено з todoListState на filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
```

Зауважте, що в інтерфейсі користувача відображається кожне завдання, оскільки `todoListFilterState` отримав значення за замовчуванням `"Показати все"`. Щоб змінити фільтр, нам потрібно реалізувати компонент `TodoListFilters`:

```jsx
function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Показати всі">всі</option>
        <option value="Показати завершені">завершені</option>
        <option value="Показати незавершені">незавершені</option>
      </select>
    </>
  );
}
```

За допомогою кількох рядків коду нам вдалося реалізувати фільтрацію! Ми будемо використовувати ті самі поняття для реалізації компонента `TodoListStats`.

Ми хочемо відобразити таку статистику:

- Загальна кількість завдань
- Загальна кількість виконаних завдань
- Загальна кількість невиконаних завдань
- Відсоток виконаних завдань

Хоча ми могли б створити селектор для кожної статистики, простіше було б створити один селектор, який повертає об’єкт, що містить потрібні нам дані. Ми назвемо цей селектор `todoListStatsState`:

```javascript
const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
```

Щоб прочитати значення `todoListStatsState`, ми знову використовуємо `useRecoilValue()`:

```jsx
function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Кількість завдань: {totalNum}</li>
      <li>Кількість виконаних завдань: {totalCompletedNum}</li>
      <li>Кількість невиконаних завдань: {totalUncompletedNum}</li>
      <li>Відсоток виконаних завдань: {formattedPercentCompleted}</li>
    </ul>
  );
}
```

Підводячи підсумок, ми створили програму зі списком справ, яка відповідає всім нашим вимогам:

- Додайте елементи до справ
- Редагувати елементи завдань
- Видалити елементи завдань
- Фільтрувати елементи завдань
- Відображення корисної статистики
