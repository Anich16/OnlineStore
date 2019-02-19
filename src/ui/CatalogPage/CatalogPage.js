import React from 'react';
import styles from './Catalog.module.css';
import {NavLink} from "react-router-dom";
import {addNewImgActionCreator, addNewNameActionCreator, addNewDescriptionActionCreator, addProductActionCreator} from "./../../Redux/CatalogPage.reducer"

const HomePage = (props) => {
    let inputImg = React.createRef();
    let inputName = React.createRef();
    let textareaElem = React.createRef();

    let changeInputImg = () => {
        let text = inputImg.current.value;
        props.store.dispatch(addNewImgActionCreator(text));
    };

    let changeInputName =() => {
        let text = inputName.current.value;
        props.store.dispatch(addNewNameActionCreator(text));
    };

    let changeTextarea =() => {
        let text = textareaElem.current.value;
        props.store.dispatch(addNewDescriptionActionCreator(text));
    };

    let addNewProduct = (e) => {
        e.preventDefault();
        props.store.dispatch(addProductActionCreator());
    };


    return <div>
        <div className={""}>

            <h1>Каталог</h1>
            <div className={styles.products}>
                {
                    props.products.map(p => <div className={styles.product}>

                        <div>
                            <NavLink to="/productPage"><img alt="Изображение" src={p.img}/></NavLink>
                        </div>
                        <div>
                            <div>
                               <NavLink to="/productPage"> <b>{p.title}</b></NavLink>
                            </div>
                            <div>
                               {p.shortDescription}
                            </div>
                        </div>
                   </div>
                    )
                }
                <form>
                    <input type="text" ref={inputImg} onChange={changeInputImg}  name="Address" placeholder="Введите адрес картинки"
                           className={styles.addressInput} value={props.newImg}/>
                    <input type="text" ref={inputName} onChange={changeInputName} name="Name"
                           placeholder="Введите название товара" className={styles.nameInput} value={props.newTitle}/>
                    <textarea className={styles.description} onChange={changeTextarea} ref={textareaElem}
                              placeholder="Введите описание товара" value={props.newDescription}/>
                    <button className={styles.button} onClick={addNewProduct}>Отправить товар</button>
                </form>
            </div>
        </div>
    </div>


};

export default HomePage;