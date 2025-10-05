import {createContext, type Dispatch, type ReactNode, type SetStateAction, useState} from "react";

type ContextType = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>
    searchKeyword: string,
    setSearchKeyword: Dispatch<SetStateAction<string>>
}
const AppContext = createContext<ContextType | null>(null)

export const AppContextProvider = ({children} : {children: ReactNode}) => {
    const [state, setState] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState("")
    return (
        <AppContext.Provider value={{state, setState, searchKeyword, setSearchKeyword}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext