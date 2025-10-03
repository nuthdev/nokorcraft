import AppContext from "../context/AppContext.tsx";
import type {Context} from "react";

class Darkmode {

    public static toggle() {
        if (this.isInDarkMode()) {
            this.setLightMode()
        } else {
            this.setDarkMode()
        }
    }
    public static isInDarkMode(): boolean {
        return localStorage.getItem('darkMode') == 'true';
    }
    public static setDarkMode() {
        localStorage.setItem('darkMode', 'true')
        document.documentElement.classList.add('dark')

    }
    public static setLightMode() {
        localStorage.setItem('darkMode', 'false')
        document.documentElement.classList.remove('dark')
    }
}

export default Darkmode;