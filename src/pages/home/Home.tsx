import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div className='flex flex-col mt-5 text-center text-base text-black place-items-center dark:text-white'>
            <h1 className='font-[Minecraft] text-3xl'>Nokorcraft</h1>
            <p className=''>NokorCraft is a minecraft server network in cambodia aiming to provide a wide variety of game modes and an extensive community</p>
            <section className='grid grid-cols-2 gap-2 w-[90%]  box-border mt-7 *:h-10 *:rounded *:w-full *:flex *:justify-center *:items-center lg:grid-cols-3 text-white'>
                <Link to='/' className='bg-red-600 box hover:opacity-80 fade-up'>Vote</Link>
                <Link to='/' className='bg-blue-600 box'>Rule</Link>
                <Link to='/' className='bg-green-600 col-span-2 lg:col-span-1 box'>Become a content creator</Link>
            </section>
            <div className='w-[100vw] h-[200px] bg-cover bg-center bg-fixed lg:order-[-1] mt-4 relative after:content-[""] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-neutral-900/50' style={{backgroundImage: 'url(/banner.webp)'}}></div>
        </div>
    )
}
export default Home