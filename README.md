<h1 align="center"> Desktop and mobile menu </h1>

<p align="center"> A simple npm package that lets you add drop down menu and mobile menu </p>

<hr/>

![Website Desktop Menu](https://imgur.com/T6YeqGf.gif)
![Website Mobile Menu](https://imgur.com/CMnvElb.gif)

<h3> List of features </h3>

<ul>
  <li>Creates an element that can be appended to any element on a page</li>
  <li>Can be simply styled using object literals notation</li>
  <li>User provides an array of menu options and symbols for mobile version </li>
</ul>

<h3> Download & Installation </h3>

```shell
$ npm i desktop-and-mobile-menu
```
The module uses ES6 export/import syntax and default css settings for menus, so bundler with css loaders such as Webpack and css-loader is required.
Guide for Webpack's css-cloade config can be found here: https://webpack.js.org/guides/asset-management/#loading-css

<h3>Usage example</h3>

```js
// src/index.js

import {createMenu, createMobileMenu} from "desktop-and-mobile-menu";

const styles = { // template is 'css-selector': {'css-property': 'property-value', 'another-css-property': 'another-value'}
  '.trigger': { // selector
    'background-color': 'rgb(0, 128, 85)', // roperty1
    'color': 'rgb(235, 255, 226)', // property 2
  }, // next selector can be added
};
const menuHeader = 'MenuOne'; // header of drop-down menu
const menuNames = ['Option 1', 'Long option 2', 'ShOpt3']; // menu options' names
const menu = createMenu(menuHeader, menuNames, styles); // function call
document.querySelector('header').append(menu);

const mobileStyles = { // similar mobile styles
  '.mobile.trigger': {
    'background-color': 'rgb(0, 128, 85)',
    'color': 'rgb(235, 255, 226)',
  },
};
const menuSymbols = ['+', '!', 'x']; //symbols to be displayed for mobile menu
const mobileMenu = createMobileMenu(menuNames, mobileStyles, menuSymbols);
document.querySelector('body').append(mobileMenu);

```

<h3>Acknowledgements</h3>

- [The Odin Project](https://www.theodinproject.com/)

<h3>License</h3>

[ISC](https://opensource.org/licenses/ISC)

<h3>Feedback</h3>
<p>If you have any feedback, please reach out to me in <i>GitHub</i>.</p>

