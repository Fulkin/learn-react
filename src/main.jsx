import {restaurants} from '/materials/mock.js';
import {createRoot} from "react-dom/client";
import '/styles/global.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

const starRating = (rating) => {
    return (
        <div>
            {[...Array(10)].map((_, i) => (
                <span key={i} style={{color: i < rating ? 'gold' : 'gray', fontSize: '20px'}}>
          ★
        </span>
            ))}
        </div>
    );
};

reactRoot.render(
    restaurants.map((restaurant) => (
        <div key={restaurant.id} className="menu">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <h3 className="header">Меню</h3>
            <ul>
                {restaurant.menu.map((menu) => (
                    <li key={menu.id} className="menu-group">
                        <span className="menu-item">{menu.name}</span>
                        <span className="price-item">{`${menu.price} у.е.`}</span>
                    </li>
                ))}
            </ul>
            <h3 className="header">Отзывы</h3>
            <ul>
                {restaurant.reviews.map((review) => (
                    <li key={review.id}>
                        <div className="user-name">{review.user}:</div>
                        <div>{review.text}</div>
                        {starRating(review.rating)}
                    </li>
                ))}
            </ul>
        </div>
    ))
);
