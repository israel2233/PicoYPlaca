export class PicoYPlaca {
  constructor(public placa: string, public date: string, public time: string) {}
}

export interface ResponseService{
    body:string,
    error:string
}
