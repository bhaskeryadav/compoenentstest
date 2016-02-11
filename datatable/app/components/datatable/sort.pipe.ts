import {Pipe} from 'angular2/core';

@Pipe({
    name:'sort'
})
export class SortPipe {
    
    transform(input) {
        return input;
    }
}