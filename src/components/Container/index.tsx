import styles from './styles.module.css'

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}