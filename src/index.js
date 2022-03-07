import './styles/normalize.css';
import './styles/styles.css';

window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('preload');
});

function triggerMenu() {
  if (this.classList.contains('clicked')) {
    this.classList.remove('clicked');
  } else {
    this.classList.add('clicked');
  }
}

document.querySelector('.mobile.trigger').addEventListener('click', triggerMenu);

function createDOMelement(tag, textContent, ...classList) {
  const element = document.createElement(tag);
  if (classList[0]) element.classList.add(classList);
  if (textContent) element.textContent = textContent;
  return element;
}

function changeElementColors(colorOptions, ...elementList) {
  elementList.forEach((element) => {
    Object.entries(colorOptions).forEach(([key, value]) => {
      element.style[key] = value;
    });
  });
}

function addLiToUl(ul, liNamesList, colorOptions) {
  liNamesList.forEach((name) => {
    const li = createDOMelement('li', name, null);
    changeElementColors(colorOptions, li);
    ul.append(li);
  });
}

function createMenu(menuName, menuNamesList, colorOptions) {
  const trigger = createDOMelement('div', null, 'trigger');
  const menu = createDOMelement('ul', null, 'menu');
  addLiToUl(menu, menuNamesList, colorOptions);
  changeElementColors(colorOptions, trigger, menu);
  const span = createDOMelement('span', menuName, null);
  trigger.append(span, menu);
  trigger.addEventListener('click', triggerMenu);
  return trigger;
}

function addMenuIcons(symbolsList){
  
}

function createMobileMenu(menuNamesList, colorOptions) {
  const menu = createMenu('', menuNamesList, colorOptions);
  menu.classList.add('mobile');
  return menu;
}

const colorOptions = {
  color: 'rgb(235, 255, 226)',
  backgroundColor: 'rgb(0, 128, 85)',
};
const menuNames = ['Option 1', 'Long option 2', 'ShOpt3'];
const menu = createMenu('MenuOne', menuNames, colorOptions);
document.querySelector('header').append(menu);
