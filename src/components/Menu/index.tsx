
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';


export const Menu = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}
                aria-label='Ir para a home'
                title='Ir para a home'
            >
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink}
                aria-label='Ver histórico'
                title='Ver histórico'
            >
                <TimerIcon />
            </a>
            <a href="#" className={styles.menuLink}
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </a>
            <a className={styles.menuLink}
                aria-label='Mudar tema'
                title='Mudar tema'
                onClick={(e) => handleThemeChange(e)}
            >
                <SunIcon />
            </a>
        </nav>
    )
}