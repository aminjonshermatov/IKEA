import {getData} from './getData.js';

const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];

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

    if (location.search) {
        const search = decodeURI(location.search);
        const [propOld, value] = search.split('=');
        const prop = propOld.substring(1);

        if (prop == 's') {
            getData.search(value, data => console.log(data));
        } else if (prop == 'wishlist') {
            getData.wishList(wishList, data => console.dir({wishList: data}));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, data => console.log(data));
        }
    }

    if (location.hash) {
        getData.item(location.hash.substring(1), data => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }

    getData.catalog(data => console.log(data));
    getData.subCatalog('Декор', data => console.log(data));
};