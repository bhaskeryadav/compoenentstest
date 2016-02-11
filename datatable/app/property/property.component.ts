import {Component} from 'angular2/core';
import {OitComponent} from '../components/oit/oit.component';
import {OsomComponent} from '../components/osom/osom.component';
import {Typology} from '../components/osom/typology';

@Component({
    templateUrl:'app/property/property.template.html',
    directives: [OitComponent,OsomComponent]
    
})
export class PropertyComponent{
      switchValue ='2';
      osomSelected1:Typology;
       myObject:Object;
     ngOnInit(){
       
        this.osomSelected1 = new Typology('', '', '');
    }
}

class Object {
 
}