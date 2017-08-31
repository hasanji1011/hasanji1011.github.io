import { Component, OnInit, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { SidebarMenuService } from './sidebar-menu.service';


import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[SidebarMenuService]
})
export class SidebarComponent implements OnInit {
  //highlightedDiv: number;
  @Output() userObject=new EventEmitter<any>();
 user={
   name:""
 };
 menuObject:any;
  constructor(private sideMenu:SidebarMenuService) {
    this.user.name = "Muzaffer Hassan";
    
     this.getMenu();    
   }
   ngAfterViewInit() {
    console.log("Sidebar User Emit")
    this.userObject.emit(this.user);
    console.log("Sidebar User Emit Called")
  }
   getMenu(){
      this.sideMenu.getMenu().subscribe(res=>{
        this.menuObject = res.menu;
        console.log(this.menuObject)
      },
      error => console.log(error)
      )

   }
  ngOnInit() {
  }
}
