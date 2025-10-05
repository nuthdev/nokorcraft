import {Link} from "react-router-dom";

const RankCard = ({id = 1, customClass = ''} : {id: number, customClass: string}) => {
    console.log('hey', customClass)
    return (
            <div className={`${customClass} min-w-[178px] flex flex-col bg-[#edf2f4]  dark:bg-neutral-700 dark:text-white text-black w-[90%] h-60 relative px-2 pt-5 rounded hover:border-red-600 hover:border-2`}>
            <div className='flex items-center flex-col'>
                <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"><path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z"/></svg>
                <span>{id}</span>
            </div>
            <section className='flex justify-center gap-2 *:w-20'>
                <span className='text-green-400'>$10</span>
                <span className='text-blue-300'>50% off</span>
            </section>
                <section>
                <p>Type: Rank</p>
            </section>
            <footer className='flex justify-center items-center flex-1'>
                <Link className='bg-red-700 py-2 px-3 rounded active:bg-red-500 hover:opacity-80' to='/'>View details</Link>
            </footer>
        </div>
    )
}
export default RankCard