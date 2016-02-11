import {Injectable} from 'angular2/core';
import {MOCK_TYPOLOGY,MOCK_TYPOLOGY_TEMP,MOCK_TYPOLOGY_TEMP1} from './mock.typology';
import {Typology} from './typology';

@Injectable()
export class OsomService {
	getTypology(typologyName:string , dependetType:string) {
        if(typologyName == 'ObjectType' && dependetType==''){
		  return Promise.resolve(MOCK_TYPOLOGY);
        } else if(typologyName == 'TaskType' && dependetType=='vehicle'){
            return Promise.resolve(MOCK_TYPOLOGY_TEMP);
        } else if(typologyName == 'ObjectType' && dependetType=='Weapon'){
            return Promise.resolve(MOCK_TYPOLOGY_TEMP1);
        } else {
            return Promise.resolve(MOCK_TYPOLOGY_TEMP);
        }
	}
}