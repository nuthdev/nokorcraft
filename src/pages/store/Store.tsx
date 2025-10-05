import StoreNav from "../../components/navbar/StoreNav.tsx";
import RankCard from "../../components/card/RankCard.tsx";
import {getRanks} from "../../api/ranksAPI.ts";
import {useContext, useEffect, useRef, useState} from "react";
import ContextProvider from "../../context/AppContext.tsx";



const Store = () => {
    const [keyword, setKeyword] = useState("");
    const context = useContext(ContextProvider);
    const [first, setFirstOpen] = useState<boolean>(true);
    const container = useRef<HTMLDivElement>(null);
    const [customClass, setCustomClass] = useState('fade-up')
    const searchKeyword = context?.searchKeyword || ''
    console.log(first)
    useEffect(() => {
        setKeyword(searchKeyword)
        setFirstOpen((prev) => {
            if (prev) {
                setCustomClass('fade-up')
                return false;
            } else {
                setCustomClass('')
                return prev;
            }
        })

    }, [searchKeyword])

    return (
        <div className='flex flex-col gap-10'>
            <StoreNav/>
            <h1 className='text-4xl font-[Minecraft] text-red-400 text-center'>Store</h1>
            <div className='flex justify-center items'>
                <div ref={container} className='container max-w-[1000px] place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {getRanks().map((rank) => (
                        rank.keyword.includes(keyword) && <RankCard id={rank.id} key={rank.id} customClass={customClass}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Store