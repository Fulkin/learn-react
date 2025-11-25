import {restaurants} from '/materials/mock.js';
import {Restaurants} from "../restaurant/restaurant.jsx";

export const App = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <Restaurants key={restaurant.id} restaurant={restaurant}/>
                ))}
            </ul>
        </div>
    )
}