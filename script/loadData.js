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



    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }

};