import Card from "../../components/card/Card"

const ServerFeatures = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-red-600'>Server Features</h2>
            <p className='text-2xl leading-relaxed text-black/50'>Discover Game Features</p>
            <div className='grid md:grid-cols-2 overflow-hidden gap-y-20  max-w-[1000px] md:gap-50 p-10' >
                <Card title='Survival' classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="TNT" classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="PvP" classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
                <Card title="Mine" classes='text-2xl w-full h-full rounded-2xl overflow-hidden'/>
            </div>
        </div>
    )
}
export default ServerFeatures