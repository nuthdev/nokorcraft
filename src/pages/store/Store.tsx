import StoreNav from "../../components/navbar/StoreNav.tsx";
import RankCard from "../../components/card/RankCard.tsx";

const Store = () => {
    return (
        <div className='flex flex-col gap-10'>
            <StoreNav/>
            <h1 className='text-4xl font-[Minecraft] text-red-400 text-center'>Store</h1>
            <div className='flex justify-center items'>
                <div className='container max-w-[1000px] place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                </div>
            </div>
        </div>
    )
}
export default Store