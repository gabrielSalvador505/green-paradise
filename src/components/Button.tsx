import "../styles/button.css"
import Arrow from "../assets/arrow-icon.svg"

export type ButtonVariant = "primary" | "secundary" | "outline" | "dark" | "transparent"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    varianty?: ButtonVariant;
    showIcon?: boolean
}

export default function Button ({ text, varianty = 'primary', showIcon = false, onClick}: IButtonProps) {

    const variantStyles: Record<ButtonVariant, string> = {
        "primary": 'btn-primary',
        "secundary": 'btn-secundary',
        "dark": 'btn-dark',
        "outline":  'btn-outline',
        "transparent": 'btn-transparent'
    }

    return (
        <button className={variantStyles[varianty]} onClick={onClick}>
            {text}
            {showIcon && <img src={Arrow} height={15} width={15}/>}
        </button>
    )
}