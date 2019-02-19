import React from 'react';
import styles from './Home.module.css';
import {NavLink} from "react-router-dom";

const HomePage = ({popularProducts}) => {



    return <div>
        <div className={""}>
            <div>
                <img alt="Изображение" className={styles.banner}
                     src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2019/02/mainbanner_s9_samuel1.jpg?resize=1500%2C0&quality=82&strip=all&ssl=1" /> </div>
            <div>
                <h2>Популярные товары</h2>
                <div className={styles.popularBlock}>
                    {
                        popularProducts.map( p => <div key={p.id}>
                            <div>
                                <NavLink to="/productPage"><img alt="Изображение" src={p.img}/></NavLink>
                            </div>
                            <div>
                                {p.title}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
};

export default HomePage;