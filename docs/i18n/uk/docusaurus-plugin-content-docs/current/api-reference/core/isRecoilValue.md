---
title: isRecoilValue(значення)
sidebar_label: isRecoilValue()
---

Повертає `true`, якщо `value` є атомом або селектором, і `false` в іншому випадку.

```jsx
function isRecoilValue(value: mixed): boolean
```

---

### Приклад

```jsx
import {atom, selector, isRecoilValue} from 'recoil';

const counter = atom({
  key: 'myCounter',
  default: 0,
});

const strCounter = selector({
  key: 'myCounterStr',
  get: ({get}) => String(get(counter)),
});

isRecoilValue(counter); // true
isRecoilValue(strCounter); // true

isRecoilValue(5); // false
isRecoilValue({}); // false
```
