import { Directive, ElementRef, Input } from '@angular/core';
declare var require:any;
const Highcharts = require('assets/js/highcharts.js');

@Directive({
  	selector: '[appDeviceUsagePie]'
})
export class DeviceUsagePieDirective {
  	constructor(public element: ElementRef) { }
  	@Input() types:any;
	ngOnInit(){
		// Highcharts.setOptions({
    //         colors: ['black','red','green']
    //     });
    //Highcharts.getOptions().plotOptions.pie.colors = ['black','red','blue'];
		// setTimeout(()=>{
      Highcharts.chart(this.element.nativeElement, {
        chart: {
          type: this.types.typeOfChart,
          width: 200,
          height: 200,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
            text: ''
        },
        
        subtitle: {
            text: ''
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          pie: {
            colors: ["rgb(15,72,127)", "rgb(52,109,164)", "rgb(88,145,200)", "rgb(124,181,236)", "rgb(160,217,255)", "rgb(196,253,255)", "rgb(233,255,255)", "rgb(255,255,255)", "rgb(255,255,255)", "rgb(255,255,255)"],
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            
            showInLegend: true
          }
        },
        series: [{
          name: '',
          innerSize: '50%',
          data: this.types.data
        }],
      })
    // },5000)
			
	}
	
}
