const btnTop = document.querySelector('.button-top');
const offset = 100;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
console.log(getTop);
window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    btnTop.classList.add('button-top--active');
  } else {
    btnTop.classList.remove('button-top--active');
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
