import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <UserContext.Provider value={{
            user,setUser,loading,setLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext)