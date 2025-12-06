import {restaurants} from '/materials/mock.js';
import {Layout} from "../layout/layout.jsx";
import {RestaurantTabs} from "../restaurant/restaurant-tabs.jsx";
import {ScrollProgress} from "../scroll/scroll-progress.jsx";

import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";

export const App = ({title}) => {

    return (
        <ThemeContextProvider>
            <ScrollProgress/>
            <Layout title={title}>
                <RestaurantTabs restaurants={restaurants}/>
            </Layout>
        </ThemeContextProvider>
    )
}