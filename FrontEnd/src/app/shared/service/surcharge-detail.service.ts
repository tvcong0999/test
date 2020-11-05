import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InforSurcharge, Surcharge } from '../model/model.model';

@Injectable({
    providedIn: 'root'
  })
  export class SurchargeDetailService{
    public show:boolean = false;
      public surchargeInfor: InforSurcharge;
      public listSurchargeInfor: Array<InforSurcharge> = [];
      public surCharge: Surcharge[];
      public myfile: File[];
      public formdata: any = new FormData();
      httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Auto' })
};
    readonly rootURL = 'https://localhost:44363/api/contents/';
    constructor(private http:HttpClient){}
    getInforSurcharge(file){
        this.formdata.append('File', file);
       return this.http.post(`${this.rootURL}CategoryTicketFromFileImage`, this.formdata);
    }
  }