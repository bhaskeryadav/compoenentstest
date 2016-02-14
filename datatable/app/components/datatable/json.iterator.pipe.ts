import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({name: 'jsonIterator'})
export class JsonIterator implements PipeTransform {
    
  transform(value, args:string[]) : any {
      console.log("11111 "+value);
    let keys = [];
    for (let key in value) {
        console.log("key "+key);
      keys.push(key);
    }
    return keys;
  }
  
}