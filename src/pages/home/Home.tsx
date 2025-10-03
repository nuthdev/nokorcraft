import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div className='container flex flex-col mt-5 text-center text-base text-black place-items-center dark:text-white'>
            <h1 className='font-[Minecraft] text-3xl'>Nokorcraft</h1>
            <p className=''>NokorCraft is a minecraft server network in cambodia aiming to provide a wide variety of game modes and an extensive community</p>
            <section className='grid grid-cols-2 gap-2 w-[60%] max-w-3/6 box-border mt-7 *:h-10 *:rounded *:w-full *:flex *:justify-center *:items-center *:hover:opacity-65 lg:grid-cols-3 text-white'>
                <Link to='/' className=' bg-red-600'>Vote</Link>
                <Link to='/' className='bg-blue-600'>Rule</Link>
                <Link to='/' className='bg-green-600 col-span-2 lg:col-span-1'>Become a content creator</Link>
            </section>
        </div>
    )
}
export default Home