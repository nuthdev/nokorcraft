const StoreNav = () => {
    return (
        <nav className='flex p-2 bg-slate-200 dark:bg-slate-900'>
            <div className='bg-black/20 dark:bg-white flex w-3/6'>
                <input className='outline-0 w-full' type='text' placeholder='search' />
                <button className='bg-red-500 h-8 font-[Minecraft] px-4' type='button'>Search</button>
            </div>
        </nav>
    )
}
export default StoreNav