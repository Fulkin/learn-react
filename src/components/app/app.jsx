import {restaurants} from '/materials/mock.js';
import {Layout} from "../layout/layout.jsx";
import {RestaurantTabs} from "../restaurant/restaurant-tabs.jsx";
import {ScrollProgress} from "../scroll/scroll-progress.jsx";

import styles from "./app.module.css"

export const App = ({title}) => {
    return (
        <>
            <ScrollProgress/>
            <h1 className={styles.title}>{title}</h1>
            <Layout>
                <RestaurantTabs restaurants={restaurants}/>
            </Layout>
        </>
    )
}