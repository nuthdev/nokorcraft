import {AppContext} from "./context/AppContext.tsx";
import AppRouter from "./router/AppRouter.tsx";

const App = () => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (localStorage.getItem('darkMode') == 'true') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    return (
        <>
            <AppContext>
                <AppRouter/>
            </AppContext>
        </>
    )
}
export default App