import { Component, OnInit } from '@angular/core';
import { Order} from '../../shared/order';
import { SalesDataService} from '../../services/SalesDataService/sales-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _salesData: SalesDataService) { }

  orders: any;
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this._salesData.getOrders(this.page, this.limit)
    .subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.orders = res ['page']['data'];
      // tslint:disable-next-line: no-string-literal
      this.total = res ['page'].total;
      this.loading = false;
    });
  }

  goToPrevious(): void{
    //console.log('Prev button clicked');
    this.page--;
    this.getOrders();
   }

   goToNext() : void{
     //console.log('Next button clicked');
     this.page++;
     this.getOrders();
   }

   goToPage(n: number):void{
     this.page = n;
     this.getOrders();
   }











}
