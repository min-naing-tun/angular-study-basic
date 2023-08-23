import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'sumArray'
})


export class SumArrayPipe implements PipeTransform{
    sumResult = 0;
    transform(values: number[]) {
        for(let i in values){
            this.sumResult += values[i];
        }
        return this.sumResult;
    }
}