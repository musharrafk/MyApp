import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyServiceService {

  constructor(private http:Http) {  }
   fetchData()
  
   {
	
	 return this.http.get('assets/data/myData.json').map(
	 (response)=> response.json());
	 
   }
   
  obj = { 
          id:"1",
		  name:"Musharraf ",
		  rg:"12345"
	} 
  
  success()
  {
	  return "successful";
  }
  

}
