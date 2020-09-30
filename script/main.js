'use strict';
// day1

const btmBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    btnClose = document.querySelector('.btn-close'),
    subCatalog = document.querySelector('.subcatalog'),
    subCatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);


const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};

const openSubMenu = event => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
};

btmBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', event => {
    if (event.code == 'Escape') {
        closeMenu();
    }
});