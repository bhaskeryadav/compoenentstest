import {Observable} from 'rxjs/Observable';
import {Component,Input,OnInit,Output,EventEmitter}  from 'angular2/core';

export class DataTableBean {
    public columns: Observable<string>;
    public selectedRow: any;
    public header:any;
    public footer:any;
    constructor(

    ) { }

}