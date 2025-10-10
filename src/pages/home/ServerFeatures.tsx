import Card from "../../components/card/Card"

const ServerFeatures = () => {
    const svg = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
    const s = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg>
    const b = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
    return (
        <div>
            <h2 className='text-4xl font-bold text-red-600'>Server Features</h2>
            <p className='text-2xl leading-relaxed text-black/50'>Discover Game Features</p>
            <div className='grid md:grid-cols-2 overflow-hidden gap-y-20  max-w-[1000px] md:gap-50 p-10' >
                <Card title='Survival' image='/image.png' icon={b} classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="TNT" image="/image.png" icon={svg} classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="PvP" image="/image.png" icon={s} classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="Mine" image="/image.png" icon={b} classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
            </div>
        </div>
    )
}
export default ServerFeatures