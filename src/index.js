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

document.querySelector('.trigger').addEventListener('click', triggerMenu);
document.querySelector('.mobile-trigger').addEventListener('click', triggerMenu);
