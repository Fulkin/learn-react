import {Layout} from "../layout/layout.jsx";
import {Tabs} from "../tabs/tabs.jsx";
import {ScrollProgress} from "../scroll/scroll-progress.jsx";

import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {UserContextProvider} from "../user-context/user-context-provider.jsx";
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";

export const App = () => {

    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <ScrollProgress/>
                    <Layout>
                        <Tabs/>
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}