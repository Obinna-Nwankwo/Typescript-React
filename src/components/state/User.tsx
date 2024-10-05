import React from "react";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
//   const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "Official",
      email: "official@example.com",
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div className="space-x-10">
      <button
        className="bouder rounded-xl hover:via-blue-500 hover:from-green-500 bg-gradient-to-br via-green-500 from-blue-500 px-6 py-2"
        onClick={handleLogIn}
      >
        Log In
      </button>
      <button
        className="bouder rounded-xl hover:via-blue-500 hover:from-green-500 bg-gradient-to-br via-green-500 from-blue-500 px-6 py-2"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <div className="">User name is {user?.name}</div>
      <div className="">User email is {user?.email}</div>
      {/* <div className="">User name is {user.name}</div>
      <div className="">User email is {user.email}</div> */}
    </div>
  );
}

export default User;
