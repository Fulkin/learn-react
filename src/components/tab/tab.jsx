import styles from "./tab.module.css";

export const Tab = ({title, onClick, isActive}) => {
    return (
        <button disabled={isActive} onClick={onClick} className={styles.button}>
            {title}
        </button>
    )
}