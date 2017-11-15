import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MyServiceService]
})
export class ProductComponent implements OnInit {

 constructor(private newservices :MyServiceService) {}

  ngOnInit() {
	  console.log(this.newservices.obj.name);
  }

}
