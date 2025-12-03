import {DishListItem} from "../dish/dish-list-item.jsx";
import {Review} from "../review/review.jsx";
import {ReviewFrom} from "../review-form/review-form.jsx";
import {Counter} from "../counter/counter.jsx";
import {useState} from "react";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

export const Restaurant = ({restaurant}) => {

    const {id, name, menu, reviews} = restaurant;
    const {count, increment, decrement} = useRangeCounter({min: 0, max: 999})

    return (
        <div key={id} className="menu">
            <h2 className="restaurant-name">{name}</h2>
            <h3 className="header-restaurant">Меню</h3>
            {menu.length ?
                (<ul>
                    {menu.map((menu) => (
                        <DishListItem key={menu.id} menu={menu}/>
                    ))}
                </ul>) : (
                    <div>Блюд в меню нет в наличии.</div>
                )
            }
            <p/>
            <h3 className="header-restaurant">Отзывы</h3>
            {reviews.length ? (<ul>
                {reviews.map((review) => (
                    <Review key={review.id} review={review}/>
                ))}
            </ul>) : (
                <div>Отзывов пока что нет.</div>
            )}
            <ReviewFrom/>
        </div>
    );
}