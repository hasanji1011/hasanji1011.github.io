import { Component, OnInit, EventEmitter, Output, Input,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navEvent = new EventEmitter<any>();
  @Input() user={};
  @ViewChild('username') input;
  constructor() { }
  
  ngOnInit() {
  }
  navClicked(){
    this.navEvent.emit('clicked');
    console.log('navClicked in child');
  }
  ngAfterViewInit(){
    console.log(this.input);
  }
  getAlert(){
    alert(88)
  }
}
