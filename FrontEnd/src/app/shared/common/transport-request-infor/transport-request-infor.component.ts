import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cssNumber } from 'jquery';
import { TransportRequestComponent } from 'src/app/main/transport-request/transport-request.component';
import { TransportRequestInfor } from '../../model/model.model';
import { TransportRequestInforService } from '../../service/service.service';


@Component({
  selector: 'app-transport-request-infor',
  templateUrl: './transport-request-infor.component.html',
  styleUrls: ['./transport-request-infor.component.css']
})
export class TransportRequestInforComponent implements OnInit {

  isDisabled: boolean;
  constructor( public tranService: TransportRequestInforService, public datepipe: DatePipe) { }

  ngOnInit(): void {

      this.isDisabled = false;
      }
  convertRefno(ref: string){
    
    return [ref.slice(0, 8),ref.slice(9, 13), ref.slice(14)].join('');
  }
  loadInforTransportRequest(){
    if(this.tranService.formData.refNo != null)
    {
    this.tranService.getInforTransportRequestID(this.convertRefno(this.tranService.formData.refNo)).subscribe((res)=>{
        if((res as TransportRequestInfor).refNo === this.tranService.formData.refNo)
        {
          // let exDate = this.datepipe.transform((res as TransportRequestInfor).excutionDate, 'dd-MM-yyyy');
          // console.log(exDate);
          this.tranService.formData = Object.assign({}, res as TransportRequestInfor);
        }
      
    });
  }
  }
}
