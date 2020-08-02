import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map} from 'rxjs-compat/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class SalesDataService {

  constructor(private http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return  this.http.get('http://localhost:5000/api/order/' + pageIndex + '/'+ pageSize).pipe();
  }
}
