import { ViewChild, ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-my-datepicker',
  templateUrl: './my-datepicker.component.html',
  styleUrls: ['./my-datepicker.component.css']
})
export class MyDatepickerComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef;

  ngAfterViewInit() {
    jQuery(this.input.nativeElement).datepicker();
  }

}
