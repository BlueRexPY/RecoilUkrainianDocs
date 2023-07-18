---
title: useRecoilBridgeAcrossReactRoots()
sidebar_label: useRecoilBridgeAcrossReactRoots()
---

Хук, який допомагає поєднати стан Recoil із вкладеним коренем React і рендерером.

```jsx
function useRecoilBridgeAcrossReactRoots_UNSTABLE():
  React.AbstractComponent<{children: React.Node}>;
```

Якщо вкладений корінь React створюється за допомогою `ReactDOM.render()` або використовується вкладений кастомний рендер, React не поширюватиме стан контексту кореневому елементу. Цей хук стане в нагоді, якщо ви бажаєте створити міст і поширити станом Recoil із вкладеним коренем React. Хук повертає компонент React, який можна використовувати замість `<RecoilRoot>` у вашому вкладеному корені React, щоб спільно використовувати той самий узгоджений стан сховища Recoil. Як і в разі будь-якого спільного використання стану в коренях React, зміни можуть бути не ідеально синхронізовані у всіх випадках.


### Example

```jsx
function Bridge() {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <CustomRenderer>
      <RecoilBridge>
        ...
      </RecoilBridge>
    </CustomRenderer>
  );
}

function MyApp() {
  return (
    <RecoilRoot>
      ...
      <Bridge />
    </RecoilRoot>
  );
}
```
