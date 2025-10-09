import {Component} from "react";

import Configuation from "../utils/Configuation";

class Footer extends Component {
    render() {
        const config = Configuation.getInstance()
        return (<footer className='flex flex-col px-0 py-4 text-black dark:text-white box-border px-3'>
            <div className="grid lg:grid-cols-4 space-y-10">
                <header  className="flex flex-col gap-10">
                <div className="flex">
                    <section><img src="/logo.svg" alt="logo" width='50px' className="rounded-xl" /></section>
                    <section className='bg-clip-text text-4xl bg-gradient-to-r from-5% from-emerald-600 to-100% to-blue-400 font-black text-transparent'>Nokorcraft</section>
                </div>
                <div>
                    <p className="text-xl text-inherit/50">The ultimate Minecraft experience in Cambodia with custom features, amazing community, and endless adventures.</p>
                </div>
            </header>
            <div className="space-y-3 text-lg text-inherit/45 lg:p-3">
                <h4 className="font-bold">Server Info</h4>
                <li className="flex justify-between">
                    <ul>version</ul>
                    <ul>{config.get('version')}</ul>
                </li>
                <li className="flex justify-between">
                    <ul>Type</ul>
                    <ul>{config.get('server-type')}</ul>
                </li>
            </div>
            <div className="space-y-3 text-lg text-imherit/45 lg:p-3">
                <h4 className="font-semibold text-emerald-300">Quick Links</h4>
                <li className="space-y-2 *:hover:text-emerald-500 *:transition-colors *:cursor-pointer list-none">
                    <ul>Rules</ul>
                    <ul>Community</ul>
                    <ul>Support</ul>
                    <ul>Staff Team</ul>
                </li>
            </div>
            <div className="space-y-3 text-lg text-inherit/45 lg:p-3">
                <h4 className="font-semibold text-emerald-300">Community</h4>
                <li className="space-y-2 *:hover:text-emerald-500 *:transition-colors *:cursor-pointer list-none">
                    <ul>Discord Server</ul>
                    <ul>Youtube channel</ul>
                    <ul>Twitte/X</ul>
                    <ul>Facebook page</ul>
                </li>
            </div>
            </div>
            <p className="text-xl text-center">© {new Date().getFullYear()} <span className="text-red-600 font-semibold">Nokorcraft</span> All Right Reserved</p>
        </footer>)
    }
}
export default Footer