import {Component,Input,OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {FieldsetComponent} from '../components/fieldset/fieldset.component';
import {OitComponent} from '../components/oit/oit.component';
import {OsomComponent} from '../components/osom/osom.component';
import {OlComponent} from '../components/ol/ol.component';
import {DatatableComponent} from '../components/datatable/datatable.component';
import {DataTableBean} from '../components/datatable/datatable.bean';
import {Typology} from '../components/osom/typology';
import {Row} from '../components/datatable/rows';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import {Http,HTTP_PROVIDERS} from 'angular2/http';


@Component({
    templateUrl:'app/object/object.template.html',
     viewProviders:[HTTP_PROVIDERS], 
    directives: [FieldsetComponent,OitComponent,OsomComponent,OlComponent,DatatableComponent]       
})
export class ObjectComponent implements OnInit{

    userName :string;
    ankita :string="this is a disabled textbox..you can't enter anything here";
    osomSelected1:Typology;
    osomSelected2:Typology;
    rows:Observable<Observable<string>>=new Observable<Observable<string>>();
    header:Observable<string>;
    footer:Row;
    content:Observable<string>;
    
    tableBean:DataTableBean=new DataTableBean();
    
    constructor(private http:Http){
        
    }
    ngOnInit(){
        this.osomSelected2 = new Typology('', '', '');
        this.osomSelected1 = new Typology('', '', '');
 
          /*this.content=this.http.get('contents.json')
            .map(res => res.json());*/
            
            this.tableBean.columns= this.http.get('contents.json')
            .map(res => res.json());     
       // console.log("object's init");
    }
    
    //TODO : make the html call this function to get the contents 
    get tableContents(){
        return this.http.get('contents.json')
            .map(res => res.json());
    }
    
    logValues(){
        console.log(this.userName+' '+this.ankita+' '+this.osomSelected1.desc+' '+this.osomSelected2.desc);        
    }
    
    onSelect(){
       // console.log("emitted data "+data.id)
        //console.log("emitted "+this.tableBean.selectedRow.id);
    }

}