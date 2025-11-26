import {Menu} from "../menu/menu.jsx";
import {Review} from "../review/review.jsx";

export const Restaurant = ({restaurant}) => {

    const {id, name, menu, reviews} = restaurant;

    return (
        <div key={id} className="menu">
            <h2 className="restaurant-name">{name}</h2>
            <h3 className="header-restaurant">Меню</h3>
            {menu.length ?
                (<ul>
                    {menu.map((menu) => (
                        <Menu key={menu.id} menu={menu}/>
                    ))}
                </ul>) : (
                    <>
                        <ul>Блюд в меню нет в наличии.</ul>
                    </>
                )
            }
            <h3 className="header-restaurant">Отзывы</h3>
            {reviews.length ? (<ul>
                {reviews.map((review) => (
                    <Review key={review.id} review={review}/>
                ))}
            </ul>) : (
                <>
                    <ul>Отзывов пока что нет.</ul>
                </>
            )}
        </div>
    );
}