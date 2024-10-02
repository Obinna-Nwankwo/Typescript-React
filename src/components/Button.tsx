

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void;
}

function Button(props: ButtonProps) {
    return (
        <button className="bouder rounded-xl hover:via-blue-500 hover:from-green-500 bg-gradient-to-br via-green-500 from-blue-500 px-6 py-2" onClick={(event) => props.handleClick(event, 1)}>Click Me</button>
    )
}

export default Button;