import {NavLink} from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import * as React from "react";

import darkmode from "../../utils/Darkmode.tsx";


const Navbar = () => {
    // mobile NavLinks
    const mobileNavLinks = useRef<HTMLUListElement>(null);
    const openIcon = useRef<SVGSVGElement>(null)
    const closeIcon = useRef<SVGSVGElement>(null)
    const darkIcon = useRef<SVGSVGElement>(null)
    const lightIcon = useRef<SVGSVGElement>(null)
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (!lightIcon.current || !darkIcon.current) return
        if (darkmode.isInDarkMode()) {
            lightIcon.current.style.display = 'none'
            darkIcon.current.style.display = 'flex'
        } else {
            lightIcon.current.style.display = 'flex'
            darkIcon.current.style.display = 'none'
        }
    }, [])
    const styleData = ['w-full', 'w-full', 'py-3']
    const toggleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
       event.currentTarget.style.rotate = isOpen ? '0deg' : '90deg'

        if (!mobileNavLinks.current || !closeIcon.current || !openIcon.current) return null
        if (isOpen) {
            mobileNavLinks.current.style.maxHeight = '0'
            openIcon.current.style.display = 'flex'
            closeIcon.current.style.display = 'none'
            setIsOpen(false)
        } else {
            mobileNavLinks.current.style.maxHeight = '1000px'
            openIcon.current.style.display = 'none'
            closeIcon.current.style.display = 'flex'
            setIsOpen(true)
        }
    }
    const toggleDarkMode = (event: React.MouseEvent<HTMLDivElement>) => {
        darkmode.toggle()
        if (!darkIcon.current || !lightIcon.current) {
            return;
        }
        if (darkmode.isInDarkMode()) {
            event.currentTarget.style.rotate = isOpen ? '360deg' : '0deg'
            lightIcon.current.style.display = 'none'
            darkIcon.current.style.display = 'flex'
        } else {
            event.currentTarget.style.rotate = isOpen ? '0deg' : '360deg'
            lightIcon.current.style.display = 'flex'
            darkIcon.current.style.display = 'none'
        }
    }

    return (
        <nav className="fixed top-0 z-50 flex items-center w-full dark:bg-white/20 backdrop-blur-md bg-black/20 h-15 pl-2 lg:pr-20 text-red-600 justify-between overflow-visible">
            <NavLink to='/' className='flex h-full gap-2'>
                <img src='/logo.svg' alt='logo' className='h-full rounded-full box-border p-1'/>
                <div className='flex flex-col justify-center text-[1rem]'>
                    <p className='text-xl font-bold'>Nokorcraft</p>
                    <p className='text-xs text-black opacity-70'>Minecraft Server</p>
                </div>
                <div className='hidden sm:flex items-center text-[0.9rem] ml-3 fading'>
                        <p className='bg-green-200 text-green-600 px-3 rounded-xl flex gap-2'><svg className='fill-green-500' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z"/></svg>Online</p>
                </div>
            </NavLink>
            <div className='flex mr-3.5 gap-5 order-1 lg:order-0'>
                <ul className='gap-2 hidden lg:flex'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='store'>Store</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>

                <div>
                    <div className='flex gap-2 relative order-2'>
                        <div onClick={toggleDarkMode} className='transition-all relative'>
                            <svg className="fill-white" ref={darkIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                            <svg ref={lightIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                        </div>

                        <div onClick={toggleMenu} className='lg:hidden transition-all mr-3 relative'>
                            <svg ref={openIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            <svg ref={closeIcon} className='hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className='relative hidden sm:flex'>
                <button className='bg-red-500 text-white font-bold py-1 px-3 rounded'>Join Community</button>
            </div>

            <ul ref={mobileNavLinks} style={{maxHeight: '0'}} className='left-0 lg:hidden fixed text-black w-full h-max top-full text-center flex flex-col overflow-hidden bg-white/50 *:cursor-pointer *:flex transition-all duration-200'>
                <li className=' backdrop-blur-2xl overflow-hidden'><NavLink
                    className={({isActive}) => {
                        const active =  isActive ? 'bg-red-600' : ''
                        const style = [...styleData, active]
                        return style.join(' ')
                    }}
                    to='/'>Home</NavLink></li>
                <li><NavLink to='store'
                className={({isActive}) => {
                    const active = isActive ? 'bg-red-600' : ''
                    const style = [...styleData, active]
                    return style.join(' ')
                }}>Store</NavLink></li>
                <li><NavLink to='/contact'
                className={({isActive}) => {
                    const active = isActive ? 'bg-red-600' : ''
                    let style = [...styleData, active]
                    return style.join(' ')
                }}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;