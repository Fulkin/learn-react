import {Menu} from "../menu/menu.jsx";
import {Review} from "../review/review.jsx";

export const Restaurants = ({restaurant}) => {

    const {id, name, menu, reviews} = restaurant;

    return (
        <div key={id} className="menu">
            <h2>HEADER</h2>
            <h2 className="restaurant-name">{name}</h2>
            <h3 className="header">Меню</h3>
            <ul>
                {menu.map((menu) => (
                    <Menu key={menu.id} menu={menu}/>
                ))}
            </ul>
            <h3 className="header">Отзывы</h3>
            <ul>
                {reviews.map((review) => (
                    <Review key={review.id} review={review}/>
                ))}
            </ul>
            <h2>FOOTER</h2>
        </div>
    );
}