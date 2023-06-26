import { createContext, useState } from "react";


export const authContext = createContext();


const AuthProvider = ({children}) => {
    // state declaration=======================
    const [user, setUser] = useState(null);












    // all value that i am passing to another components=======================================
    const passingValue = {
        shafin:'shafin'
    }
    
    return (
        <authContext.Provider value={passingValue}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;