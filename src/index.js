import './styles/normalize.css';
import './styles/styles.css';

function triggerMenu() {
  if (this.classList.contains('clicked')) {
    this.classList.remove('clicked');
  } else {
    this.classList.add('clicked');
  }
}

function createDOMelement(tag, textContent, ...classList) {
  const element = document.createElement(tag);
  if (classList[0]) element.classList.add(classList);
  if (textContent) element.textContent = textContent;
  return element;
}

function changeElementsStyle(styles) {
  const style = document.createElement('style');
  Object.entries(styles).forEach(([selector, properties]) => {
    const stringProperties = JSON.stringify(properties);
    const unquoted = stringProperties.replace(/,?"([^"]+)":"([^"]+),?"/g, '$1:$2;');
    style.innerHTML += `${selector} ${unquoted}`;
  });
  document.querySelector('head').appendChild(style);
}

function addLiToUl(ul, liNamesList) {
  liNamesList.forEach((name) => {
    const li = createDOMelement('li', name, null);
    ul.append(li);
  });
}

function createMenu(menuName, menuNamesList, styles) {
  const trigger = createDOMelement('div', null, 'trigger');
  const menu = createDOMelement('ul', null, 'menu');
  addLiToUl(menu, menuNamesList, styles);
  changeElementsStyle(styles);
  const span = createDOMelement('span', menuName, null);
  trigger.append(span, menu);
  trigger.addEventListener('click', triggerMenu);
  return trigger;
}

function addMenuIcons(menu, symbolsList) {
  const ul = menu.querySelector('ul');
  ul.childNodes.forEach((child, index) => {
    const span = createDOMelement('span', symbolsList[index], null);
    child.append(span);
  });
}

function createMobileMenu(menuNamesList, styles, symbolsList) {
  const menu = createMenu('', menuNamesList, styles);
  menu.classList.add('mobile');
  addMenuIcons(menu, symbolsList);
  return menu;
}

export { createMenu, createMobileMenu };
