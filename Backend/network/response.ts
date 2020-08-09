import { Responses } from "../models/models";
import { Response } from "express";

export function success ( res:Response, message:string, status:number){
    res.status(status || 200).send({
        error: '',
        body: message
        
   });
    
}

export function error(res:Response, message:string, status:number){
    res.status(status || 400).send({
        error: message,
        body: ''
    })

}