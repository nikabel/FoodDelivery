import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sorting'
})
export class SortingPipe implements PipeTransform {

    transform(filteredList: any[], value: string): any[] {
        if (value==='name')
            return filteredList.sort((a, b) => a._name.toLowerCase() !== b._name.toLowerCase() ?
            a._name.toLowerCase() < b._name.toLowerCase() ? -1 : 1 : 0);
        else if (value==='price')
            return filteredList.sort((a: any, b: any) => a._price-b._price);
        else return filteredList;
    }
}