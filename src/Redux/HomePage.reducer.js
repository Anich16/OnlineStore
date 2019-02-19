let initialState = {
    popularProducts: [
        {
            id: 1,
            img: 'https://content2.onliner.by/catalog/device/header/f05ace8977f07aff539fb4421bc896b2.jpeg',
            title: 'Honor'
        },
        {
            id: 2,
            img: 'https://content2.onliner.by/catalog/device/header/7b809895488980811292228b9885292c.jpeg',
            title: 'Xiaomi'
        },
        {
            id: 3,
            img: 'https://content2.onliner.by/catalog/device/header/e62bf283f99f7d3539eac6ab4e859d11.jpeg',
            title: 'Huawei'
        },
        {
            id: 4,
            img: 'https://content2.onliner.by/catalog/device/header/a83458571f2c39fc9c435bd1116b4876.jpeg',
            title: 'Iphone'
        }
    ]
};

let HomePageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default HomePageReducer;