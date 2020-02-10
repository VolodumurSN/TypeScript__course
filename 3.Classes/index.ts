class Server {
    static VERSION = '1.0.3'

    //X public name: string
    //X protected ip: number

    private status: string = 'working'

    constructor(public name: string, protected ip: number) {  //Ok
        //X this.name = name
        //X this.ip = ip
    }

    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    public getStatus(): string {
        return  this.status
    }
}

const server: Server = new Server('AWS', 1234)