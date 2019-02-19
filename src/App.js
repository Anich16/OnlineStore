import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage"
import {Route, NavLink} from "react-router-dom";


let App =(props) => {
    let state = props.state;
    let store = props.store;
        return (
            <div className={styles.App}>
                <div>
                    <div><NavLink to="/homePage" activeClassName={styles.active}>Home</NavLink></div>
                    <div><NavLink to="/catalogPage" activeClassName={styles.active}>Catalog</NavLink></div>
                </div>

                <Route exact path="/productPage" render = {() => <ProductPage comments={state.productPage.comments}
                                                                              newPostText={state.productPage.newPostText}
                                                                              store={store}/>}/>
                <Route exact path="/homePage" render = {() => <HomePage popularProducts={state.homePage.popularProducts} />}/>
                <Route exact path="/catalogPage" render =  {() => <CatalogPage products={state.catalogPage.products}
                                                                                newImg={state.catalogPage.newImg}
                                                                                newTitle={state.catalogPage.newTitle}
                                                                                newDescription={state.catalogPage.newDescription}
                                                                                store={store}/>}/>

            </div>
        );
};

export default App;
