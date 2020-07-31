import { Component, OnInit } from '@angular/core';
import { Order} from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {   id: 1,
        customer:{id: 1, name: 'Agilent', state: 'CO', email: 'agilent@gmail.com'},
        total: 230,
        placed: new Date(2020, 1, 1),
        fulfilled: new Date(2020, 5, 1),
    },
    {   id: 2,
      customer:{id: 2, name: 'Philips', state: 'CO', email: 'philips@gmail.com'},
      total: 45,
      placed: new Date(2020, 5, 1),
      fulfilled: new Date(2020, 5, 1),
  },
  {   id: 3,
    customer:{id: 1, name: 'Agilent', state: 'CO', email: 'agilent@gmail.com'},
    total: 230,
    placed: new Date(2020, 6, 1),
    fulfilled: new Date(2020, 5, 1),
},
{   id: 4,
  customer:{id: 1, name: 'Agilent', state: 'CO', email: 'agilent@gmail.com'},
  total: 230,
  placed: new Date(2020, 10, 1),
  fulfilled: new Date(2020, 5, 1),
},
{   id: 5,
  customer:{id: 1, name: 'Agilent', state: 'CO', email: 'agilent@gmail.com'},
  total: 230,
  placed: new Date(2020, 11, 1),
  fulfilled: new Date(2020, 5, 1),
},
  ];

  ngOnInit(): void {
  }

}
