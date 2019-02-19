import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
// import store from "./Redux/myStore.js";
import {combineReducers, createStore} from "redux";
import ProductPageReducer from "./Redux/ProductPage.reducer";
import HomePageReducer from "./Redux/HomePage.reducer";
import CatalogPageReducer from "./Redux/CatalogPage.reducer";

let comdinedReducers = combineReducers({
    productPage: ProductPageReducer,
    catalogPage: CatalogPageReducer,
    homePage: HomePageReducer
});

let store = createStore(comdinedReducers);

store.subscribe(() => {
        let state = store.getState();
        renderPage(state)
    });

let renderPage = () => {
    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()}
             store={store}/>
    </BrowserRouter>, document.getElementById('root'));
};



renderPage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
