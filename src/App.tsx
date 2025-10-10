import {AppContextProvider} from "./context/AppContext.tsx";
import AppRouter from "./router/AppRouter.tsx";
import './App.css'

const App = () => {
    // const location = useLocation()
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             console.log(entry.target);
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('fade-up');
    //
    //                 observer.unobserve(entry.target)
    //             }
    //         })
    //     })
    //     const elements = document.querySelectorAll('.box')
    //     elements.forEach(ep => observer.observe(ep))
    // }, [location])
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (localStorage.getItem('darkMode') == 'true') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return (
        <>
            <AppContextProvider>
                <AppRouter/>
            </AppContextProvider>
        </>
    )
}
export default App