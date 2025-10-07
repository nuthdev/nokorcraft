import {Link} from "react-router-dom";
import Configuation from "../../utils/Configuation.ts";
import RankCard from "../../components/card/RankCard.tsx";
import ServerFeatures from "./ServerFeatures.tsx";



const Home = () => {
    const config = Configuation.getInstance()
    const cards = []
    for (let i = 0; i < 4; i++) {
        cards.push(<RankCard id={i} key={i} customClass={'fade-up'}/>)
    }
    return (
        <div className=' flex flex-col m-0  text-center text-base gap-10 text-black place-items-center dark:text-white'>
            {/*<h1 className='font-[Minecraft] text-3xl'>Nokorcraft</h1>*/}
            {/*<p className=''>{config.get('home')['contents'][0]}</p>*/}
            {/*<section className='grid grid-cols-2 gap-2 w-[90%] box-border mt-7 *:h-10 *:rounded *:w-full *:flex *:justify-center *:items-center lg:grid-cols-3 text-white max-w-200'>*/}
            {/*    <Link to='/' className='bg-red-600 box hover:opacity-80 fade-up'>Vote</Link>*/}
            {/*    <Link to='/' className='bg-blue-600 fade-up'>Rule</Link>*/}
            {/*    <Link to='/' className='bg-green-600 col-span-2 lg:col-span-1 fade-up'>Become a content creator</Link>*/}
            {/*</section>*/}
            <div className='relative h-[100vh] py-20 w-full order-[-1] overflow-hidden'>
                <div className='absolute inset-0 overflow-hidden'>
                    <img className='absolute inset-0 w-full h-full object-cover scale-110 transform' src='/banner.webp' alt='banner'/>
                    <div className='absolute inset-0 bg-white/80'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-red-500/10 from-20% dark:from-black/90 to-rose-200/90 dark:to-rose-300/90'/>
                    <div className='relative z-10 text-black dark:text-white top-30 container flex flex-col space-y-12 w-full lg:max-w-[1000px] overflow-hidden p-2 select-none'>
                        <div className=''>
                            <span className='text-red-400 font-bold border bg-white py-0.5 p-4 rounded-full'>Version {config.get('version')} </span>
                            <span className='text-green-400 bg-green-300/50 rounded-full border py-0.5 px-4 font-normal'> 0 Online Players</span>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-7xl lg:text-9xl font-bold text-red-400 animate-pulse bg-gradient-to-r from-red-700 via-rose-500 bg-clip-text text-center'>Nokorcraft</h1>
                            <p className='text-xl text-center font-mono text-red-600 mb-4'>SURVIVAL.CREATIVE.ADVENTURE</p>
                            <p className='text-xl'>Experience the ultimate Minecraft adventure in Cambodia's premier server.<span className='text-red-600 font-bold'> Build, explore, and survive</span> with our amazing community of players. Custom features, events, and endless possibilities awai</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 '>
                            <button className='select-text border px-6 py-2 rounded bg-red-500 text-white font-bold transition-all hover:bg-red-600 hover:scale-110 z-[505]'>Join now - {config.get('ip')}</button>
                            <Link to='/store' className='px-10 py-1 rounded bg-white dark:bg-stone-950/60 backdrop-blur-xl font-bold hover:scale-110 transition-all '>View our store</Link>
                        </div>
                    </div>
                </div>

            </div>
            <ServerFeatures/>
            {/*<div className='flex flex-col w-full m-0'>*/}
            {/*    <section className='flex'>*/}
            {/*        <p>{config.get('home')['contents'][1]}</p>*/}
            {/*    </section>*/}
            {/*    <div className='bg-black/25 py-3 flex w-full justify-center'>*/}
            {/*        <div className='grid gap-10 grid-cols-2 w-[90%] place-items-center md:grid-cols-3 lg:grid-cols-4'>*/}
            {/*            {cards}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Home