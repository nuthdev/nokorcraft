import {Link} from "react-router-dom";
import Configuation from "../../utils/Configuation.tsx";
import RankCard from "../../components/card/RankCard.tsx";


const Home = () => {
    const config = Configuation.getInstance()
    return (
        <div className='flex flex-col m-0  text-center text-base gap-10 text-black place-items-center dark:text-white'>
            <h1 className='font-[Minecraft] text-3xl'>Nokorcraft</h1>
            <p className=''>{config.get('home')['contents'][0]}</p>
            <section className='grid grid-cols-2 gap-2 w-[90%] box-border mt-7 *:h-10 *:rounded *:w-full *:flex *:justify-center *:items-center lg:grid-cols-3 text-white max-w-200'>
                <Link to='/' className='bg-red-600 box hover:opacity-80 fade-up'>Vote</Link>
                <Link to='/' className='bg-blue-600 fade-up'>Rule</Link>
                <Link to='/' className='bg-green-600 col-span-2 lg:col-span-1 fade-up'>Become a content creator</Link>
            </section>
            <div className='w-[100%] h-[300px] bg-cover bg-center bg-fixed lg:order-[-1] relative after:content-[""] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-neutral-900/50' style={{backgroundImage: 'url(/banner.webp)'}}></div>
            <div className='flex flex-col w-full m-0'>
                <section className='flex'>
                    <p>{config.get('home')['contents'][1]}</p>
                </section>
                <div className='bg-black/25 py-3 flex w-full justify-center'>
                    <div className='grid gap-10 grid-cols-2 w-[90%] place-items-center md:grid-cols-3 lg:grid-cols-4'>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home