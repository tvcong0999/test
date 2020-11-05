import { Component, OnInit } from '@angular/core';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { SurchargeDetailService } from 'src/app/shared/service/surcharge-detail.service';

@Component({
  selector: 'app-surcharge-detail-list',
  templateUrl: './surcharge-detail-list.component.html',
  styleUrls: ['./surcharge-detail-list.component.css']
})
export class SurchargeDetailListComponent implements OnInit {
  
  constructor(public listSurchageService: ListSurchageService, public surchargeDetailService: SurchargeDetailService ) { }

  ngOnInit(): void {
   // this.surchargeDetailService.show = true;
  }

}
