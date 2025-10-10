import { useContext} from "react";
import * as React from "react";
import AppContext from "../../context/AppContext.tsx";

const StoreNav = () => {
    const context = useContext(AppContext)
    if (!context) return null
    const {setSearchKeyword} = context
    function searchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            setSearchKeyword(event.currentTarget.value)
        }

    }
    return (
        <nav className='flex p-2 bg-none'>
            <div className='bg-black/20 dark:bg-white flex w-3/6'>
                <input className='outline-0 w-full' type='text' placeholder='search' onKeyDown={searchSubmit}/>
                <button className='bg-red-500 h-8 font-[Minecraft] px-4' type='button'>Search</button>
            </div>
        </nav>
    )
}
export default StoreNav