import {Component,Input,OnInit}  from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Row} from './rows';
import {SearchPipe} from './search.pipe';
import {SortPipe} from './sort.pipe';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector:'asset-datatable',
    viewProviders:[HTTP_PROVIDERS],    
    templateUrl:'app/components/datatable/datatable.template.html',
    pipes:[SearchPipe,SortPipe]
})
export class DatatableComponent implements OnInit{
    @Input() rows:Observable<Observable<string>>;
    @Input() header:Observable<string>;
    
    @Input() content:Observable<string>;
    //content:Object[]=new Array();
    
  //  constructor(private http:Http){
        
   // }
    
    filterTerm:string='';
    columnIndex:number=0;
         
    ngOnInit(){
       
       //this.content=this.http.get('contents.json')
          //  .map(res => res.json());
            //scribe(content => this.content=content);
            
            
        /*    for (var index = 0; index < this.content.length;index++) {
           var element = this.content[index];
           alert(" dsa "+element);
            }*/
        
    }    
    
}

