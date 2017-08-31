import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements AfterViewInit {
  progress_val;
  constructor(private renderer: Renderer) { }
  @Input() val:any;
  @ViewChild('progress') input: ElementRef;

  ngAfterViewInit() {
    this.progress_val = this.val+'%';
    console.log("progressbar "+this.val);
    this.renderer.setElementStyle(this.input.nativeElement, 'width', this.val+'%');
  }

}
