import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {UserInformationComponent} from './user-information/user-information.component';
import {NotepadComponent} from './notepad/notepad.component';
import {ObjectComponent} from './object/object.component';
import {WorkBasketComponent} from './workbasket/workbasket.component';
import {AdminComponent} from './admin/admin.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {SearchComponent} from './search/search.component';
import {PropertyComponent} from './property/property.component';

@Component({
    selector: 'my-app',
	templateUrl: 'app/app.template.html',
    directives:[RouterOutlet,ROUTER_DIRECTIVES,UserInformationComponent,NotepadComponent],
    providers:[ROUTER_PROVIDERS]
})
@RouteConfig([
  {path:'/',name: 'Workbasket', component: WorkBasketComponent, useAsDefault: true},
  {path:'/workbasket',name: 'Workbasket', component: WorkBasketComponent},
  {path:'/object',name: 'Object', component: ObjectComponent},
  {path:'/admin',name: 'Admin', component: AdminComponent},
  {path:'/notifications',name: 'Notifications', component: NotificationsComponent},
  {path:'/search',name: 'Search', component: SearchComponent},
  {path:'/property',name: 'Property', component: PropertyComponent}
    
])
export class AppComponent { 
	
}