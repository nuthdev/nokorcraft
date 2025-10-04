import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import Home from "../pages/home/Home.tsx";
import Configuation from "../utils/Configuation.tsx";
import Store from "../pages/store/Store.tsx";

const AppRouter = () => {
    new Configuation()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/store' element={<Store/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter