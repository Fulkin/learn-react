import {createPortal} from "react-dom";
import styles from "./model.module.css";

export const Modal = ({children, onClose}) => {
    return (
        createPortal(
            <div className={styles.overlay} onClick={onClose}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                {children}
            </div>,
            document.getElementById("modal"))
    )
};