import {Pipe} from 'angular2/core';

@Pipe({
    name:"search"
})
export class SearchPipe{
    searchTerms:Map<string,string> = new Map<string,string>();
    
    transform(input, [colIndex, term]){               
        this.searchTerms.set(colIndex, term);

        this.searchTerms.forEach(function(value, key) {
            input = input.filter((item)=>item.columns[key].startsWith(value))
        }, 
        this.searchTerms);   
        return input;           
    }  
    
}