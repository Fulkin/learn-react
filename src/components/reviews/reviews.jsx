import {Review} from "../review/review.jsx";

export const Reviews = ({reviews}) => {

    return (
        <ul>
            <h3>Отзывы</h3>
            {
                reviews?.map(({id, userId, text, rating}) =>
                    <Review
                        key={id}
                        userId={userId}
                        text={text}
                        rating={rating}
                    />)
            }
        </ul>
    )
}