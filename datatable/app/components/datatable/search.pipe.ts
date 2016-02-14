import {Pipe,PipeTransform} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Pipe({
    name:"search"
})
export class SearchPipe implements PipeTransform{
    searchTerms:Map<string,string> = new Map<string,string>();
    
    transform(input,[colIndex,term,key]){
        console.log("colindex "+colIndex+" term "+term+" key "+key);
        let ret=new Array<string>();
        input.filter(function(data){
            //console.log("filter"+data);
            data.forEach(e => {
                console.log("filter : "+e[key])
        if(e[key].contains(term)){
            ret.push(e);
        }
        }).subscribe(function (v) {
        console.log("subs"+v);
    });
        
        return input;
    }
    
   /* transform(input, [colIndex, term]){               
        this.searchTerms.set(colIndex, term);

        this.searchTerms.forEach(function(value, key) {
            input = input.filter((item)=>item.columns[key].startsWith(value))
        }, 
        this.searchTerms);   
        return input;           
    }*/  
    
}