import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaseparatednumber'
})
export class CommaseparatednumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    let y = value.toString()
    let itration = value/1000;
    let x;
    if(itration>=1){
      // for(let i =0; i<itration; i++){
      //   let x = y.substr(0,1);
      //   console.log(x)
      // }
      x = y.substr(0,1);
      x+=','+y.substr(1,3);
      console.log(x)
    }
    return x;
  }

}

// @Pipe({name: 'commaSeparatedNumber'})
// export class CommaSeparatedNumberPipe implements PipeTransform {
//   transform(value:number, args:string[]) : any {
//     return // Convert number to comma separated number string
//   }
// }
