import {Pipe, PipeTransform} from '@angular/core';
import {Dish} from '../classes/dish';

@Pipe({
    name: 'searchDishes'
})
export class SearchPipe implements PipeTransform{
    transform(dishes: Dish[], search =''): Dish[]{
        if (!search.trim()){
            return dishes;
        }

        return dishes.filter(dish =>{
            return dish._name.toLowerCase().includes(search.toLowerCase());
        });
    }
}