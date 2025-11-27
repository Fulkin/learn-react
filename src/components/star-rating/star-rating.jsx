export const StarRating = (rating) => {
    return (
        <div>
            {[...Array(10)].map((_, i) => (
                <span key={i} className={i < rating ? "gold-star" : "grey-star"}>★</span>
            ))}
        </div>
    );
};