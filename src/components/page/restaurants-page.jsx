import {Tabs} from "../tabs/tabs.jsx";
import {NavLink, Outlet} from "react-router";
import {useGetRestaurantsQuery} from "../../redux/services/api/index.js";
import classNames from "classnames";
import styles from "./styles/restaurant-page.module.css";
import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.js";

export const RestaurantsPage = () => {
    const {data, isLoading, isError} = useGetRestaurantsQuery();
    const theme = useContext(ThemeContext);

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    return (
        <div>
            <h1>
                Restaurant Page
            </h1>

            <Tabs>
                {data.map(({id, name}) => (
                    <NavLink
                        key={id}
                        to={`/restaurants/${id}/menu`}
                        className={({isActive}) =>
                            classNames(styles.root, styles.headerTitle, {
                                [styles.active]: isActive,
                                light: theme === 'light',
                                dark: theme === 'dark',

                            })
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </Tabs>

            <Outlet/>
        </div>
    );
};