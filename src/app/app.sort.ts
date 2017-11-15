import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
   
})





export class FilterPipe implements PipeTransform {
    transform(value: any[], args: string): any {
		if(args=="asending")
		{ 
        	return value.sort();  
	     }
	       else if(args=="desending"){
		   
		   return value.sort().reverse();
	}
        
    }
}