import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PicoYPlaca, ResponseService } from '../models/models'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PicoYPlacaServiceService {
  constructor(private http: HttpClient) { }

  detPicoPlaca(data: PicoYPlaca) {
    return this.http.post<ResponseService>(environment.url, data)
  }
}
