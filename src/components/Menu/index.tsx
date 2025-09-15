
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
        return storageTheme;
    })

    const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
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
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}