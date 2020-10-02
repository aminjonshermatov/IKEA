import {getData} from './getData.js';

const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd045',
        count: 1
    },
    {
        id: 'idd095',
        count: 2
    }
];

export const loadData = () => {

    if (location.hash) {
        getData.item(location.hash.substring(1), data => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }

    //getData.catalog(data => console.log(data));
    //getData.subCatalog('Декор', data => console.log(data));
};