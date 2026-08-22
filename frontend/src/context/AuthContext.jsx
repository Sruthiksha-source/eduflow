//AuthContext = global state that every page can access

import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/api";

//Create the context
const AuthContext = createContext(null)

//AuthProvider wraps the whole app and provides auth state to every component
export const AuthProvider = ({ children }) => {
    //user - stores the logged in user object or null
    const [user, setUser] = useState (null)

    //loading - true while we check if user is logged in
    const[loading, setLoading] = useState(true)

    //App load - check if token is stored
    //Yes -> fetch user data and set in state otherwise set loading = false
    useEffect(() =>{
        const checkAuth = async () => {
            const token = localStorage.getItem("token")
            if (token){
                try{
                    //Token exists
                    const userData = await getCurrentUser()
                    setUser(userData)
                }catch (error){
                    localStorage.removeItem("token")
                    setUser(null)
                }
            }
            //whether logged in ot not stop showing loading spin
            setLoading(false)
        }
        checkAuth()
    },[]) //empty [] means run once when app first loads

    //Called after logging in
    //Stores token in locaStorage and user in state
    const login = (token, userData) => {
        localStorage.setItem("token", token)
        setUser(userData)
    }

    //Called when user clicks logout
    //Removes token from localStorage and clears user from state
    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    //Everything inside value is accessible to any component
    return(
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

//Custom hook - lets any component access auth state with one line:
//const {user,login,logout} = useAuth()
export const useAuth = () => useContext(AuthContext)