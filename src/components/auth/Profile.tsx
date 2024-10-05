

export type ProfileProps = {
    name: string;
}


export const Profile = ({name}: ProfileProps) => {
    return <div>This is a Profile Name: {name}</div>
}