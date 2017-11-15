import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [MyServiceService]
})
export class AppComponent  {
	values:any;
  title = 'CLi  Compment';
  ttt="Vijay";
  items=["SEPT","SLEM","MLA"];
  newItem="ABC";
  pushItems=function()
  {
	  if(this.newItem!="")
	  {
		this.items.push(this.newItem);
		this.newItem="";
	  }		
  }
  removeItem=function(index)
  {
	  this.items.splice(index ,1);
  }
  onsubmit=function(user)
  {
	  console.log(user);
  }
  
   constructor(private newservices :MyServiceService) {}
    ngOnInit()
	{
		
		 
		this.newservices.fetchData().subscribe((value)=>
		{
            this.values=value; console.log(this.values);
		})		
		 
	} 
   myadata=this.newservices.obj;
   
   
}
