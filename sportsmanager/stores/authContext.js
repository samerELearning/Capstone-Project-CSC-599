import { createContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value= {user}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext