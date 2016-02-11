import {Component,Input,OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {FieldsetComponent} from '../components/fieldset/fieldset.component';
import {OitComponent} from '../components/oit/oit.component';
import {OsomComponent} from '../components/osom/osom.component';
import {OlComponent} from '../components/ol/ol.component';
import {DatatableComponent} from '../components/datatable/datatable.component';
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
    constructor(private http:Http){
        
    }
    ngOnInit(){
        this.osomSelected2 = new Typology('', '', '');
        this.osomSelected1 = new Typology('', '', '');
         let headerA=["ID","Month","Quantity","Name"];
        let footerA={"columns":["Total","-","500","-"]};
        let rowsA=[
           ["1","Jan"],
           ["2","Feb","20","Hello2"]
        
        ];
          this.content=this.http.get('contents.json')
            .map(res => res.json());
        /*
        this.header=Observable.fromArray(headerA);
        //this.footer=Observable.fromArray(footerA);
        
        alert('asdas');
        for (var index = 0; index < rowsA.length;index++) {
            this.rows.concat(Observable.fromArray(rowsA[index]));       
        }
        alert('978889');
        
*/        
        
        
    }
    
    logValues(){
        console.log(this.userName+' '+this.ankita+' '+this.osomSelected1.desc+' '+this.osomSelected2.desc);        
    }

}