import {createContext, type Dispatch, type ReactNode, type SetStateAction, useState} from "react";
import * as React from "react";
type ContextType = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>
}
const ContextProvider = createContext<ContextType | null>(null);

export const AppContext = ({children} : {children: ReactNode}) => {
    const [state, setState] = useState(false)
    return (
        <ContextProvider.Provider value={{state, setState}}>
            {children}
        </ContextProvider.Provider>
    )
}
export  default ContextProvider