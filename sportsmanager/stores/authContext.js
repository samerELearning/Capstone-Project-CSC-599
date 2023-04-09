import { createContext } from "react";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}