import {Component,Input,OnInit,Output,EventEmitter}  from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Row} from './rows';
import {SearchPipe} from './search.pipe';
import {SortPipe} from './sort.pipe';
import {DataTableBean} from './datatable.bean';
import {JsonIterator} from './json.iterator.pipe';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector:'asset-datatable',
    viewProviders:[HTTP_PROVIDERS],    
    templateUrl:'app/components/datatable/datatable.template.html',
    pipes:[SearchPipe,SortPipe,JsonIterator]
})
export class DatatableComponent implements OnInit{
   
    @Input() header:Observable<string>;
   
    @Output() onRowSelectListener:EventEmitter<any> = new EventEmitter();

    filterTerm:string='h';
    columnIndex:number=0;
    columnKey:string='';
    
    @Input() tableData:DataTableBean;
             
    ngOnInit(){
       
       //TODO : find out how to load header and footer from the json 
       // console.log("datatable init");
        this.tableData.generateHeader();
    }    
    
    onRowSelect(data:any){
        this.tableData.selectedRow=data;
       // console.log('selected data : '+data);
        this.onRowSelectListener.emit(data);
    }
    
}

