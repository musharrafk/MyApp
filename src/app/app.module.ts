import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { VkappComponent } from './vkapp/vkapp.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { FilterPipe } from './app.sort';
import { Pipe, PipeTransform } from '@angular/core'; 

@NgModule({
  declarations: [
     FilterPipe,
    AppComponent,
    MyComponentComponent,
    VkappComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
  
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule,
	RouterModule.forRoot([
	{
		 path:'members',
		 component:MembersComponent
	},
	{
		 path:'product',
		 component:ProductComponent
	}
	])
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
