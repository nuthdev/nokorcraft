import StoreNav from "../../components/navbar/StoreNav.tsx";
import RankCard from "../../components/card/RankCard.tsx";
import {getRanks} from "../../api/ranksAPI.ts";
import {useContext, useEffect, useRef, useState} from "react";
import ContextProvider from "../../context/AppContext.tsx";
import {search} from "../../utils/Helper.ts";



const Store = () => {
    const [keyword, setKeyword] = useState("");
    const context = useContext(ContextProvider);
    const [firstOpen, setFirstOpen] = useState<boolean>(true);
    const container = useRef<HTMLDivElement>(null);
    const [customClass, setCustomClass] = useState('fade-up')
    const searchKeyword = context?.searchKeyword || ''
    useEffect(() => {
        setKeyword(searchKeyword)
        if (firstOpen) {
            setCustomClass('fade-up');
            setFirstOpen(false);
        } else {
            setCustomClass('');
        }

    }, [searchKeyword]);

    return (
        <div className='flex flex-col gap-10'>
            <StoreNav/>
            <h1 className='text-4xl font-[Minecraft] text-red-400 text-center'>Store</h1>
            <div className='flex justify-center items'>
                <div ref={container} className='container max-w-[1000px] place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10'>
                    {keyword !== '' && search(keyword).map((key) => (
                        <RankCard key={key} id={key} customClass={customClass}/>
                    ))}
                    {keyword == '' && getRanks().map((rank) => (
                        <RankCard id={rank.id} key={rank.id} customClass={customClass}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Store