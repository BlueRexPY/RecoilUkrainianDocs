---
title: Установка
---

## NPM

Пакет Recoil знаходиться в <a href="https://www.npmjs.com/get-npm" target="_blank"> npm </a>. Щоб встановити останню стабільну версію, виконайте таку команду:

```shell
npm install recoil
```

Або, якщо ви використовуєте <a href="https://classic.yarnpkg.com/en/docs/install/" target="_blank">yarn</a>:

```shell
yarn add recoil
```

Або, якщо ви використовуєте <a href="https://bower.io/#install-bower" target="_blank">bower</a>:

```shell
bower install --save recoil
```

### Пакувальники

Recoil, встановлений через NPM, чудово поєднується з пакувальниками модулів, такими як [Webpack](https://webpack.js.org/) або [Rollup](https://rollupjs.org/).

### Підтримка ES5

Збірки Recoil не переносяться на ES5, і ми не підтримуємо використання Recoil з ES5. Якщо вам потрібно підтримувати браузери, які спочатку не надають функції ES6, ви можете зробити це, скомпілювавши свій код за допомогою [Babel](https://babeljs.io/) та використовуючи предустановку [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env). Однак ми не підтримуємо це, і ви можете зіткнутися з проблемами. 

Зокрема, [як і React](https://reactjs.org/docs/javascript-environment-requirements.html), Recoil залежить від `Map` та `Set` типів та інших функцій ES6. Емуляція цих функцій за допомогою поліфілів може призвести до зниження продуктивності.

## CDN
очинаючи з версії 0.0.11, Recoil пропонує збірку UMD, яка може бути безпосередньо використана в тезі `<script>` і надає символ `Recoil` глобальному простору імен. Ми рекомендуємо посилатися на певний номер версії та збірку, щоб уникнути несподіваної поломки в новіших версіях:

```html
<script src = "https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"> </script>
```
Ви можете переглянути всі файли Recoil на CDN за адресою [jsdelivr](https://www.jsdelivr.com/package/npm/recoil).

## ESLint

Якщо ви використовуєте [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) у своєму проекті. Наприклад, з конфігурацією eslint, подібною до цієї:

```json
// попередня конфігурація .eslint
{
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

Рекомендується додати  [`'useRecoilCallback'`](/docs/api-reference/core/useRecoilCallback) до списку `additionalHooks`. З цією зміною ESLint попередить, коли залежності, передані до `useRecoilCallback()`, вказані неправильно, і запропонує виправити. Формат `additionalHooks` - це рядок регулярного виразу.
```json
// змінена конфігурація .eslint
{
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "useRecoilCallback"
      }
    ]
  }
}
```

## Нічні збірки

Ми створюємо пакет один раз на день на основі поточної [`main`](https://github.com/facebookexperimental/Recoil/tree/main) гілки та публікуємо його як [`nightly`](https://github.com/facebookexperimental/Recoil/tree/nightly) гілку на GitHub. Ви можете використовувати цю гілку через `npm`:

```shell
npm install https://github.com/facebookexperimental/Recoil.git#nightly
```

або `yarn`:

```shell
yarn add https://github.com/facebookexperimental/Recoil.git#nightly
```
або додайте залежність до `package.json` і запустіть `npm install` або `yarn install`:

```js
  "recoil": "facebookexperimental/Recoil.git#nightly",
```
