import styles from "./scroll.module.css";
import {useScroll} from "./useScroll.jsx";

export const ScrollProgress = () => {

    const scrollPercent = useScroll();

    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.progressBar}
                style={{
                    width: `${scrollPercent}%`,
                }}
            />
        </div>
    )
}