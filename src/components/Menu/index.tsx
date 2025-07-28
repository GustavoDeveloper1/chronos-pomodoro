
import styles from './styles.module.css';
import { HouseIcon, SettingsIcon, TimerIcon } from 'lucide-react';


export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}>
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink}>
                <TimerIcon />
            </a>
            <a href="#" className={styles.menuLink}>
                <SettingsIcon />
            </a>
            <a href="#" className={styles.menuLink}>
                <TimerIcon />
            </a>
        </nav>
    )
}