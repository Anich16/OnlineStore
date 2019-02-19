
let store = {
    getState() {
        return this._state;
    },

    _state: {
        homePage: {
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
        },
        catalogPage: {
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
            newDescription: "",
        },
        productPage: {
            comments: [
                {
                    id: 1,
                    text: "Я купил этот телефон, а он не работает"
                },
                {
                    id: 2,
                    text: "Отличный телефон, все четко работает"
                },
                {
                    id: 3,
                    text: "Все нормик"
                }
            ],
            newPostText: ""
        }
    },

    _render(){},

    subscribe(newFunction){
        this._render = newFunction;
    },
    dispatch(action) {
        switch (action.type) {
            case  "ADD_COMMENT":
                  let newComment = {
                     id: 4,
                     text: this._state.productPage.newPostText
                 };
                this._state.productPage.comments.push(newComment);
                this._state.productPage.newPostText = "";
                this._render();
                break;
            case "ADD_NEW_POST":
                this._state.productPage.newPostText = action.newText;
                this._render();
                break;
            case "ADD_PRODUCT":
                let newProduct = {
                    id: 5,
                    img: this._state.catalogPage.newImg,
                    title: this._state.catalogPage.newTitle,
                    shortDescription: this._state.catalogPage.newDescription
                };
                this._state.catalogPage.products.push(newProduct);
                this._state.catalogPage.newImg = "";
                this._state.catalogPage.newTitle = "";
                this._state.catalogPage.newDescription = "";
                this._render();
                break;
            case "ADD_NEW_IMG":
                this._state.catalogPage.newImg = action.newText;
                this._render();
                break;
            case "ADD_NEW_NAME":
                this._state.catalogPage.newTitle = action.newText;
                this._render();
            break;
            case "ADD_NEW_DESCRIPTION":
                this._state.catalogPage.newDescription = action.newText;
                this._render();
                break;
        }
    },

    // addComment(){
    //     let newComment = {
    //         id: 4,
    //         text: this._state.productPage.newPostText
    //     };
    //     this._state.productPage.comments.push(newComment);
    //     this._state.productPage.newPostText = "";
    //     this._render();
    // },

    // addNewPost(newText){
    //     this._state.productPage.newPostText = newText;
    //     this._render();
    // },
    // addProduct(){
    //     let newProduct ={
    //         id: 5,
    //         img: this._state.catalogPage.newImg,
    //         title: this._state.catalogPage.newTitle,
    //         shortDescription: this._state.catalogPage.newDescription
    //     };
    //     this._state.catalogPage.products.push(newProduct);
    //     this._state.catalogPage.newImg = "";
    //     this._state.catalogPage.newTitle = "";
    //     this._state.catalogPage.newDescription = "";
    //     this._render();
    // },
    // addNewImg(newText){
    //     this._state.catalogPage.newImg = newText;
    //     this._render();
    // },
    // addNewName(newText){
    //     this._state.catalogPage.newTitle = newText;
    //     this._render();
    // },
    // addNewDescription(newText){
    //     this._state.catalogPage.newDescription = newText;
    //     this._render();
    // }
};



export default store;