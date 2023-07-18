---
title: useRecoilStoreID()
sidebar_label: useRecoilStoreID()
---

Надає `StoreID`, пов’язаний із наразі активним [`<RecoilRoot>`](/docs/api-reference/core/RecoilRoot).

---

```jsx
function useRecoilStoreID(): StoreID
```

`StoreID` пов’язано з найближчим предком [`<RecoilRoot>`](/docs/api-reference/core/RecoilRoot) (який не має параметра `override`, встановленого на `false` з іншим предком) або [ `<RecoilBridge>`](/docs/api-reference/core/useRecoilBridgeAcrossReactRoots).

Тип `StoreID`є закритим (інкапсульованим). Наданий ідентифікатор співпадає з значенням `storeID`, переданим до ефектів атома, які пов’язані з тим самим `<RecoilRoot>`.
