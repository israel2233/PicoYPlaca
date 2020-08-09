import service=require('../services/picoPlacaService')

export class PicoYPlaca{
    private placa:string;
    private date:string;
    private time:string;
    constructor(placa:string, date:string, time:string){
        this.placa=placa;
        this.date=date;
        this.time=time
    }

    determinateCirculation(){
        return service.determinePicoYPlaca(this.placa,this.date,this.time)
    }

}

export type Requests={
    placa:string,
    date:string,
    hour:string
}
export interface Responses{
    message:string,
    error:string
}

export const errors:{[key:number]:string}={
    1:'The date is earlier!',
    2:'The date is invalid',
    3:'The hour is invalid',
    4:'"Placa" is Incorrect!',

}
