import {Component,Output, Input,OnInit,EventEmitter,OnChanges} from 'angular2/core';
import {OsomService} from './osom.service';
import {Typology} from './typology';


@Component({
    selector: 'asset-osom',
    templateUrl:'app/components/osom/osom.template.html',
    providers: [OsomService]
})
export class OsomComponent implements OnInit,OnChanges{
    
    @Input() assetId : string;
    @Input() assetLabel : string;
    @Input() assetDefaultLabel : string="Select";
    @Input() isTypology:boolean=true;
    @Input() typologyName:string;
    @Input() bindModelData: Typology;
    @Input() dependentType:string="";
    @Output() bindModelDataChange: EventEmitter<Typology> = new EventEmitter();
    
    private typologyValues : Array<Typology>;
      
    constructor(private _osomService: OsomService) {
    }
    
    ngOnInit(){
            
    }
    
    ngOnChanges(){
        if(this.isTypology){
            console.log(this.typologyName+' '+this.dependentType);
            this.getTypology(this.typologyName,this.dependentType);
        }      
    }
    
    updateData(event) {      
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }
    
    private getTypology(typologyName:string,dependentType:string){
        this._osomService.getTypology(typologyName,dependentType).then(typology => this.typologyValues=typology);
    }
   
}