import {Observable} from 'rxjs/Observable';
import {Component,Input,OnInit,Output,EventEmitter}  from 'angular2/core';
import 'rxjs/add/operator/first';
export class DataTableBean {
    
    public columns: Observable<any>;
    public selectedRow: any;
    public header:string[]=new Array();
    public footer:any;
    
    
    generateHeader(){
            this.columns.subscribe(
                data =>{
                    for(let key in data){
                        for(let k in key){
                       // console.log(" key again "+k);
                        }
                    }
                }
            )
    }
    

}