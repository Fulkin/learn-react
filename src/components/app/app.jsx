import {restaurants} from '/materials/mock.js';
import {Layout} from "../layout/layout.jsx";
import {RestaurantTabs} from "../restaurant/restaurant-tabs.jsx";
import {ScrollProgress} from "../scroll/scroll-progress.jsx";

import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {UserContextProvider} from "../user-context/user-context-provider.jsx";

export const App = ({title}) => {

    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <ScrollProgress/>
                <Layout title={title}>
                    <RestaurantTabs restaurants={restaurants}/>
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    )
}