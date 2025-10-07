const Card = ({title, classes}: {title: string, classes: string}) => {
    return (
        <div className={`${classes} flex flex-col hover:scale-110 transition-all hover:text-red-300 bg-black/5 pb-4`}>
            <header className='w-full max-h-50 relative overflow-hidden'>
                <img src="/image.png" alt="banner" className="object-cover select-none a"/>
                <div className='absolute inset-0 bg-gradient-to-t from-white/60 '></div>
                <div className="absolute top-2 left-2 bg-red-500 w-14 h-14 rounded-2xl flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EFEFEF"><path d="M480-662Zm182 182Zm-364 0Zm182 182Zm0-314-76.67-77.33v-160h154v160L480-612Zm209.33 208.67L612-480l77.33-77.33h160v154h-160Zm-578.66 0v-154h160L348-480l-77.33 76.67h-160Zm292.66 292.66v-160L480-348l77.33 77.33v160h-154ZM480-662l41.33-41.03v-110.3h-82v110L480-662ZM146.67-439.33h110.66L298-480l-40.37-41.33H146.67v82Zm292.66 292.66h82v-110.66L480-298l-40.67 40.37v110.96Zm263.7-292.66h110.3v-82h-110L662-480l41.03 40.67Z"/></svg></div>
            </header>
            <div className='flex flex-col text-start gap-5'>
                <h3>{title}</h3>
                <p className='text-black/60 text-xl' >Classic survival gameplay with custom enhancements, economy system, and player shops. Build your empire from scratch.</p>
            </div>
            <footer className=' *:bg-rose-500/40 font-mono text-rose-500 *:text-base *:p-2 p-2 *:rounded-xl'><span>Ecoonomy</span> <span>Shop</span> <span>Claims</span></footer>
        </div>
    )
}
export default Card