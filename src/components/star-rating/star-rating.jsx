export const StarRating = (rating) => {
    return (
        <div>
            {[...Array(10)].map((_, i) => (
                <span key={i} style={{color: i < rating ? 'gold' : 'gray', fontSize: '15px'}}>
          ★
        </span>
            ))}
        </div>
    );
};