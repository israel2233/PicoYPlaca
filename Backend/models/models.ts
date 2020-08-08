import service=require('../services/picoPlacaService')

class Placa{
    private placa:string;
    private date:string;
    private time:string;
    constructor(placa:string, date:string, time:string){
        this.placa=placa;
        this.date=date;
        this.time=time
    }

    determinateCirculation(){
        service.determinatePicoYPlaca(this.placa,this.date,this.time)
        
    }

}
