import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'sortArray'
})

export class SortArrayPipe implements PipeTransform{
    transform(values: number[]){
        return values.sort();
    };
}