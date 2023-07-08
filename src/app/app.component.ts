import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-jquery';

  visible : boolean = false;

  addressChange(){
   /*  if (e.target.checked){
      $('#addressDetils').show();
    }
    else{
      $('#addressDetils').hide();
    } */
 
    this.visible = !this.visible;
  }
}
