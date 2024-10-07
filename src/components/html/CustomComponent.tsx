import Greet from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.isLogging}
            {props.name}
        </div>
    )
}