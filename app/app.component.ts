import { Component,Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onActivate(component){
     $.getScript('../assets/js/custom.js');
      window.scrollTo(0,0);
  }
  @Input() currentUser={};
  title = 'app works!';
  navOpen:Boolean = true;
  toggleNav(data){
    this.navOpen = !(this.navOpen);
  }
  getUser(user){
    this.currentUser = user;
  }
}
