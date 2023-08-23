import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'sortStringArray'
})

export class SortStringArrayPipe implements PipeTransform{
    transform(values: any[], sortType: string){
        if(sortType === 'asc'){
            return values.sort();
        }
        else if(sortType === 'desc'){
            return values.sort().reverse();
        }
        return null;
    }
}