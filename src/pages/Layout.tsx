import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.tsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}
export default Layout