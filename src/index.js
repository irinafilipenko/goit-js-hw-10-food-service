import './styles.css';
const checkboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
console.log(bodyEl);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



checkboxEl.addEventListener("click", onClickEl);

let clicks = 0;

function onClickEl(event) {
    clicks += 1;
    console.log(clicks);
    if (clicks % 2 === 0) {
     bodyEl.classList.remove('Theme.LIGHT');
        bodyEl.classList.add('Theme.DARK');
    }
    else  {
        bodyEl.classList.remove('Theme.DARK');
        bodyEl.classList.add('Theme.LIGHT');
    
    }
}

localStorage.setItem("my-data", 'jjj');