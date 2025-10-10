import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import Home from "../pages/home/Home.tsx";
import Configuation from "../utils/Configuation.ts";
import Store from "../pages/store/Store.tsx";
import Contact from "../pages/contact/Contact.tsx";

const AppRouter = () => {
    new Configuation()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/store' element={<Store/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter