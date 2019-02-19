const ADD_PRODUCT = "DM/CATALOG_PAGE/ADD_PRODUCT";
const ADD_NEW_IMG = "DM/CATALOG_PAGE/ADD_NEW_IMG";
const ADD_NEW_NAME = "DM/CATALOG_PAGE/ADD_NEW_NAME";
const ADD_NEW_DESCRIPTION = "DM/CATALOG_PAGE/ADD_NEW_DESCRIPTION";

let initialState = {
    products: [
        {
            id: 1,
            img: 'https://content2.onliner.by/catalog/device/header/f05ace8977f07aff539fb4421bc896b2.jpeg',
            title: 'Honor',
            shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 16 Мп, аккумулятор 3400 мАч, 2 SIM, цвет синий'
        },
        {
            id: 2,
            img: 'https://content2.onliner.by/catalog/device/header/7b809895488980811292228b9885292c.jpeg',
            title: 'Xiaomi',
            shortDescription: 'Android, экран 6.39" AMOLED (1080x2340), Qualcomm Snapdragon 845, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3200 мАч, 2 SIM, цвет черный'
        },
        {
            id: 3,
            img: 'https://content2.onliner.by/catalog/device/header/e62bf283f99f7d3539eac6ab4e859d11.jpeg',
            title: 'Huawei',
            shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 659, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный'
        },
        {
            id: 4,
            img: 'https://content2.onliner.by/catalog/device/header/a83458571f2c39fc9c435bd1116b4876.jpeg',
            title: 'Iphone',
            shortDescription: 'Apple iOS, экран 5.8" AMOLED (1125x2436), Apple A11 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2716 мАч, 1 SIM, цвет темно-серый'
        }
    ],
    newImg: "",
    newTitle: "",
    newDescription: ""
};

let CatalogPageReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let newProduct = {
                id: state.products.length+1,
                img: state.newImg,
                title: state.newTitle,
                shortDescription: state.newDescription
            };
            if (newProduct.img !== "" && newProduct.title !== "" && newProduct.shortDescription !== "") {
                state.products.push(newProduct);
            }
            state.newImg = "";
            state.newTitle = "";
            state.newDescription = "";
            return state;
        case ADD_NEW_IMG:
            state.newImg = action.newUrl;
            return state;
        case ADD_NEW_NAME:
            state.newTitle = action.newName;
            return state;
        case ADD_NEW_DESCRIPTION:
            state.newDescription = action.newText;
            return state;
        default:
            return state;
    }
};

 export const addNewImgActionCreator = (text) => {
    return {
        type: ADD_NEW_IMG,
        newUrl: text
    }
};

 export const addNewNameActionCreator = (text) => {
    return {
        type: ADD_NEW_NAME,
        newName: text
    }
};

export const addNewDescriptionActionCreator = (text) => {
    return {
        type: ADD_NEW_DESCRIPTION,
        newText: text
    }
};

export const addProductActionCreator = () => {
    return {
        type: ADD_PRODUCT
    }
};

export  default CatalogPageReducer;