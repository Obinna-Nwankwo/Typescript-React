import IsLoggedIn from "../state/IsLoggedIn";
import {Login} from "./LogIn";
import {ProfileProps} from "./Profile";


type PrivateProps = {
    IsLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>;
}

export const Private = ({IsLoggedIn, component: Component}: PrivateProps) => {
    // return IsLoggedIn? <Component /> : <IsLoggedIn />

    if (IsLoggedIn){
        return <Component name="Official"/>
    } else {
        return <Login />
    }
}