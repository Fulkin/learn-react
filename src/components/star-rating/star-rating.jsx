import styles from './star-rating.module.css';

export const StarRating = ({rating}) => {
    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? styles.goldStar : styles.greyStar}>★</span>
            ))}
        </div>
    );
};