import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);
// export const UserContext = createContext<UserContextType | null>(null);

// function UserContextProvider({ children }: UserContextProps) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
// }


// export default UserContextProvider;

export const UserContextProvider = ({children}: UserContextProps) => {
    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}