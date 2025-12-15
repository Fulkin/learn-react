import {Layout} from "../layout/layout.jsx";
import {ScrollProgress} from "../scroll/scroll-progress.jsx";

import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {UserContextProvider} from "../user-context/user-context-provider.jsx";
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";
import {BrowserRouter, Route, Routes} from "react-router";
import {HomePage} from "../page/home-page.jsx";
import {RestaurantPage} from "../page/restaurant-page.jsx";
import {RestaurantLayout} from "../layout/restaurant-layout.jsx";

export const App = () => {

    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <ScrollProgress/>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route index element={<HomePage/>}/>
                                <Route path="/restaurants" element={<RestaurantLayout/>}>
                                    <Route path=":restaurantId" element={<RestaurantPage/>}/>
                                </Route>
                                <Route path='*' element={<div>Not Found</div>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}