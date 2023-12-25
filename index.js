const button = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const spanTop = document.querySelectorAll('.btn-menu span');
const IconBag = document.querySelector('.svg-bag');
const bag = document.querySelector('.bag')
const main = document.querySelector('main')
const setabag = document.querySelector('.seta-bag');
const removebag = document.querySelector('.remove-bag')

const header = document.querySelector('header');

button.addEventListener('click', () => {
    menu.classList.toggle('active');

    spanTop[0].classList.toggle('span-topo-active');

    spanTop[1].classList.toggle('span-bottom-active');

    IconBag.classList.toggle('bag-opacity');

    header.classList.toggle('header-active');

    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})
IconBag.addEventListener('click', () => {
    bag.classList.toggle('bag-active');
    setabag.classList.toggle('seta-active')
})
main.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})
removebag.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})


