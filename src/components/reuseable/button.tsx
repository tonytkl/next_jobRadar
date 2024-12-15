type Props = {
    text: string
    onClick: () => void
    color: 'primary' | 'dark'
}

const colorTheme = {
    primary: 'bg-primary',
    dark: 'bg-dark',
}

const Button = ({ text, onClick, color }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`rounded ${colorTheme[color]} p-2 text-sm text-white`}
        >
            {text}
        </button>
    )
}

export default Button
