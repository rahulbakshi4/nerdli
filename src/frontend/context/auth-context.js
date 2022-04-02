import { createContext, useContext, useState, useEffect } from 'react'
const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ token: "", isAuthenticated: false })
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token")

        token ? setAuth({ token, isAuthenticated: true }) : setAuth({ token: '', isAuthenticated: false })

    }, [])
    return (<AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
        {children}
    </AuthContext.Provider>)
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
