import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';
import {addComentActionCreator, addNewPostActionCreator} from "../../Redux/ProductPage.reducer";

const ProductPage = (props) => {
    let textElement = React.createRef();

    let changeTextarea = () => {
        let text = textElement.current.value;
        props.store.dispatch(addNewPostActionCreator(text));

    };
    let addCommentItem = (elem) => {
        elem.preventDefault();
        props.store.dispatch(addComentActionCreator());

    };

    return <div>
        <div className={styles.productCard}>
            <div>
                <img alt="Изображение" className={styles.productCard}
                     src="https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg"/>
            </div>
            <div>
                <h1>Смартфон Samsung Galaxy S8</h1>
                <div>
                    Android, экран 5.8" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты
                    памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный
                </div>
            </div>
            <div>
                <div>Обсуждений <span>10</span></div>
                <div>Отзывов <span>13</span></div>
            </div>
        </div>
        <div>
            <div>
                <h3>Отзывы:</h3>
            </div>
            <div>
                {
                    props.comments.map((comment) => {
                        return <Comment text={comment.text} key={comment.id}/>

                    })
                }
                <form>
                    <textarea rows="4" className={styles.commentBlock} ref={textElement} onChange={changeTextarea} value={props.newPostText}/>
                    <button className={styles.button} onClick={addCommentItem}>Отправить отзыв</button>
                </form>
            </div>
        </div>
    </div>
};

export default ProductPage;