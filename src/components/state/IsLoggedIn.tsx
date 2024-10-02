import React from 'react'
import { useState } from 'react'


function IsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div className='space-x-10'>
        <button className="bouder rounded-xl hover:via-blue-500 hover:from-green-500 bg-gradient-to-br via-green-500 from-blue-500 px-6 py-2" onClick={handleLogin} >Log In</button>
        <button className="bouder rounded-xl hover:via-blue-500 hover:from-green-500 bg-gradient-to-br via-green-500 from-blue-500 px-6 py-2" onClick={handleLogout} >Log Out</button>
        <div>
          User is  {isLoggedIn? "logged in" : "loged out"}
        </div>
    </div>
  )
}

export default IsLoggedIn