const Card = ({title, classes, image, icon}: {title: string, classes: string, image: string, icon: any}) => {
    return (
        <div className={`${classes} flex flex-col hover:scale-110 transition-all hover:text-red-300 bg-black/5 dark:bg-amber-50/10 pb-4`}>
            <header className='w-full max-h-50 relative overflow-hidden'>
                <img src={image} alt="banner" className="object-cover select-none a"/>
                <div className='absolute inset-0 bg-gradient-to-t from-white/60 '></div>
            <div className="absolute top-2 left-2 bg-red-500 w-14 h-14 rounded-2xl flex justify-center items-center">{icon}</div>
            </header>
            <div className='flex flex-col text-start gap-5'>
                <h3>{title}</h3>
                <p className='text-inherit text-xl' >Classic survival gameplay with custom enhancements, economy system, and player shops. Build your empire from scratch.</p>
            </div>
            <footer className=' *:bg-rose-500/40 font-mono text-rose-500 *:text-base *:p-2 p-2 *:rounded-xl'><span>Ecoonomy</span> <span>Shop</span> <span>Claims</span></footer>
        </div>
    )
}
export default Card