import { createContext, useContext } from "react";


const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

//authProvider
export const AuthProvide = ({ children }) => {

    const value = {
        //add your authentication logic here
    }
    return (
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}