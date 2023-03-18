---
title: <RecoilRoot>
sidebar_label: <RecoilRoot>
---

Надає контекст, у якому атоми мають значення. Має бути предком будь-якого компонента, який використовує будь-які Recoil хуки.

---

### Властивості
- `initializeState?`: `(MutableSnapshot => void)`
  - An optional function that takes a [`MutableSnapshot`](/docs/api-reference/core/Snapshot#transforming-snapshots) to [initialize](/docs/api-reference/core/Snapshot#state-initialization) the `<RecoilRoot>` atom state.  This sets up the state for the initial render and is not intended for subsequent state changes or async initialization.  Use hooks such as [`useSetRecoilState()`](/docs/api-reference/core/useSetRecoilState) or [`useRecoilCallback()`](/docs/api-reference/core/useRecoilCallback) for async state changes.  [Atom effects](/docs/guides/atom-effects) can be used for easier initialization of dynamic atoms and co-locating initialization logic with atom definitions.  Atom effect initializations take precedence over `initializeState`.
- `override?`: `boolean`
  - Defaults to `true`. This prop only matters when this `<RecoilRoot>` is nested within another `<RecoilRoot>`. If `override` is `true`, this root will create a new Recoil scope. If `override` is `false`, this `<RecoilRoot>` will perform no function other than rendering its children, thus children of this root will access the Recoil values of the nearest ancestor RecoilRoot.

  - `initializeState?`: `(MutableSnapshot => void)`
  - Додаткова функція, яка використовує [`MutableSnapshot`](/docs/api-reference/core/Snapshot#transforming-snapshots) для [ініціалізації](/docs/api-reference/core/Snapshot#state-initialization) ` Стан атома <RecoilRoot>`. Це встановлює стан для початкової візуалізації та не призначене для наступних змін стану чи асинхронної ініціалізації. Використовуйте хуки, такі як [`useSetRecoilState()`](/docs/api-reference/core/useSetRecoilState) або [`useRecoilCallback()`](/docs/api-reference/core/useRecoilCallback) для асинхронних змін стану. [атомні ефекти](/docs/guides/atom-effects) можна використовувати для полегшення ініціалізації динамічних атомів і спільного розташування логіки ініціалізації з визначеннями атомів. Ініціалізація ефекту Atom має пріоритет над `initializeState`.
- ``override?`: `boolean`
  - За замовчуванням `true`. Цей атрибут має значення лише тоді, коли цей `<RecoilRoot>` вкладено в інший `<RecoilRoot>`. Якщо `override` має значення `true`, цей корінь створить нову область Recoil. Якщо `override` має значення `false`, цей `<RecoilRoot>` не виконуватиме жодних функцій, окрім візуалізації своїх дочірніх елементів, тому дочірні елементи цього кореня матимуть доступ до значень Recoil найближчого предка RecoilRoot.

### Використання кількох `<RecoilRoot>`

Кілька `<RecoilRoot>` можуть співіснувати та представляти незалежних постачальників/сховищ стану атома; атоми матимуть різні значення в кожному корені. Ця поведінка залишається незмінною, коли ви вкладаєте один корінь у інший (внутрішній корінь маскує зовнішні корені), якщо ви не вкажете для параметра `override` значення `false` (див. "Властивості").

Зверніть увагу, що кеші, такі як кеші селекторів, можуть бути спільними для коренів. Оцінки селектора мають бути ідемпотентними, за винятком кешування або журналювання, тому це, як правило, не повинно бути проблемою, однак це можна спостерігати та може призвести до кешування надлишкових запитів через корені. Кеші можна очистити за допомогою [`useRecoilRefresher_UNSTABLE()`](/docs/api-reference/core/useRecoilRefresher).

### Приклад

```jsx
import {RecoilRoot} from 'recoil';

function AppRoot() {
  return (
    <RecoilRoot>
      <ComponentThatUsesRecoil />
    </RecoilRoot>
  );
}
```
