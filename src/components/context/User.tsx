import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Users = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    // if (userContext){
    userContext.setUser({
      name: "Official",
      email: "official@gmail.cosm",
    });
    // }
  };
  const handleLogout = () => {
    // if (userContext){
    userContext.setUser(null);
    // }
  };

  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>
        User Name: {userContext.user?.name}
        {/* User Name: {userContext?.user?.name} */}
      </div>
      <div>
        User Email: {userContext.user?.email}
        {/* User Email: {userContext?.user?.email} */}
      </div>
    </div>
  );
};
