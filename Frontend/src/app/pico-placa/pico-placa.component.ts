import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {PicoYPlaca, ResponseService} from '../models/models'
import {PicoYPlacaServiceService} from '../services/pico-yplaca-service.service'


@Component({
  selector: 'app-pico-placa',
  templateUrl: './pico-placa.component.html',
  styleUrls: ['./pico-placa.component.css']
})
export class PicoPlacaComponent implements OnInit {
  ngForm:FormGroup
  model:PicoYPlaca
  aux:boolean=false;
  validation_messages={
    placa: [
      {type:'required', message: 'This field is required'},
      {type:'pattern', message: 'Invalid!'}
    ],
    date: [
      {type:'required', message: 'This field is required'},
      {type:'pattern', message: 'Invalid!'}
    ],
    hour:[
      {type:'required', message: 'This field is required'},
      {type:'pattern', message: 'Invalid!'}
    ]
  }

  constructor(private formBiulder:FormBuilder, private serv:PicoYPlacaServiceService) {
    this.ngForm=this.formBiulder.group({
      placa:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^(?:\\d{4})$")
      ])),
      date:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$")
      ])),
      hour:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^([0-1][0-9]|2[0-3])(:)([0-5][0-9])$")
      ])),
    })
  }

  detPicoYPlaca(){
    const picoPlaca:PicoYPlaca=new PicoYPlaca(this.ngForm.value.placa,this.ngForm.value.date,this.ngForm.value.hour)
    
    this.serv.detPicoPlaca(picoPlaca).subscribe(
      res=>{
        
        alert(res.body)
      },
      err=>{
        alert(err.error.error)
      }
    )
  }


  ngOnInit(): void {
  }

}
