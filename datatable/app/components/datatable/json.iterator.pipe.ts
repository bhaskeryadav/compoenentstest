import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({name: 'jsonIterator'})
export class JsonIterator implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}