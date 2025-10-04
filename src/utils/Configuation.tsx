

class Configuation {

    // Configiuration data
    private data: any

    private static instance: Configuation
    constructor() {

    }

    // load configuration data
    public async load() {
        const res = await fetch('/configuration.json')
        this.data = await res.json()
    }

    /**
     * for getting a data from configuration
     */
    public get(name: string) {
        return this.data[name]
    }

    /**
     * use to get all data from config
     */
    public getAll() {
        return this.data
    }
    public static getInstance() {
        return this.instance
    }
    public static async init() {
        if (!this.instance) {
            try {
                this.instance = new Configuation()
                await this.instance.load()
            } catch (error) {
                console.log(error)
            }
        }

        return this.instance
    }
}
export default Configuation