
import styles from './styles.module.css'

export const Cycles = () => {
    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            
            <div className={styles.cyclesDots}>
                <span className={`${styles.cylesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cylesDot} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    )
}