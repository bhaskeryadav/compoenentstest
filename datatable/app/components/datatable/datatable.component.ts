import {Component,Input,OnInit,Output,EventEmitter}  from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Row} from './rows';
import {SearchPipe} from './search.pipe';
import {SortPipe} from './sort.pipe';
import {KeysPipe} from './key.pipe';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector:'asset-datatable',
    viewProviders:[HTTP_PROVIDERS],    
    templateUrl:'app/components/datatable/datatable.template.html',
    pipes:[SearchPipe,SortPipe,KeysPipe]
})
export class DatatableComponent implements OnInit{
    @Input() rows:Observable<Observable<string>>;
    @Input() header:Observable<string>;
    
    @Input() content:Observable<string>;
    @Output() onRowSelectListener:EventEmitter<any> = new EventEmitter();

    
    filterTerm:string='';
    columnIndex:number=0;
         
    ngOnInit(){
       
        
    }    
    
    onRowSelect(data:string){
        console.log('selected data : '+data);
        this.onRowSelectListener.emit(data);
    }
    
}

