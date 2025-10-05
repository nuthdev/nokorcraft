import {Link} from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import * as React from "react";

import darkmode from "../../utils/Darkmode.tsx";


const Navbar = () => {
    // mobile links
    const mobileLinks = useRef<HTMLUListElement>(null);
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
    const toggleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
       event.currentTarget.style.rotate = isOpen ? '0deg' : '90deg'

        if (!mobileLinks.current || !closeIcon.current || !openIcon.current) return null
        if (isOpen) {
            mobileLinks.current.style.maxHeight = '0'
            openIcon.current.style.display = 'flex'
            closeIcon.current.style.display = 'none'
            setIsOpen(false)
        } else {
            mobileLinks.current.style.maxHeight = '1000px'
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
        <nav className="sticky top-0 z-50 flex items-center w-full bg-neutral-900/60 h-12 text-red-600 justify-between overflow-visibl">
            <Link to='/' className='flex h-full gap-2'>
                <img src='/logo.svg' alt='logo' className='h-full rounded-full box-border p-1'/>
                <span className='flex items-center'>Nokorcraft</span>
            </Link>
            <div className='flex mr-3.5 gap-5'>
                <ul className='gap-2 hidden lg:flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='store'>Store</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className='flex gap-2 relative'>
                    <div onClick={toggleDarkMode} className='transition-all relative'>
                        <svg ref={darkIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                        <svg ref={lightIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                    </div>

                    <div onClick={toggleMenu} className='lg:hidden transition-all mr-3 relative'>
                        <svg ref={openIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        <svg ref={closeIcon} className='hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                </div>
            </div>

            <ul ref={mobileLinks} style={{maxHeight: '0'}} className='lg:hidden absolute top-full text-white w-full h-max text-center flex flex-col overflow-hidden bg-neutral-900/80 *:cursor-pointer *:py-3 transition-all duration-200'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='store'>Store</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;