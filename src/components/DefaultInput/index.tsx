
import styles from './styles.module.css';


type DefaultInputProps = {
    labelText?: string
    id: string
} & React.ComponentProps<'input'>

export const DefaultInput = ({ type, labelText, id, ...rest }: DefaultInputProps) => {
    return (
        <>
            {labelText && (
                <label htmlFor="input">{labelText}</label>
            )}
            <input className={styles.input} type={type} id={id}  {...rest} />
        </>
    )
}