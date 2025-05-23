import React, { createContext,useEffect, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null )
    const [role, setRole] = useState(localStorage.getItem("role") || null)

    const login = (newToken, useRole) => {

        localStorage.setItem("token", newToken);
        localStorage.setItem("role", useRole);
        setToken(newToken);
        setRole(useRole);

    }

    const logout = ()=> {
        localStorage.clear();
        setToken(null);
        setRole(null);
    }

    useEffect(()=> {
        setToken(localStorage.getItem("token"));
        setRole (localStorage.getItem("role"));

    }, [])

    return(
        <AuthContext.Provider value={{token, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}