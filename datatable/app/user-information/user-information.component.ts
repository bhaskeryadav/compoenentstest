import {Component, OnInit} from 'angular2/core';

@Component({
    selector:'user-information',
    templateUrl:'app/user-information/user-information.template.html'
})
export class UserInformationComponent implements OnInit{
     userName='Test User';
     designation='Officer';
     lastLoginTime=Date.now();
     sessionLoginTime=Date.now();
     unit='Garda';
    
   /* constructor(
        public userName:string,
        public designation:string,
        public unit:string,
        public sessionLoginTime:string,
        public lastLoginTime:string
    ){}
    */
    ngOnInit(){
      /*  this.userName='Test User';
        this.designation='Officer';
        this.lastLoginTime='20/01/2016';
        this.sessionLoginTime='20/01/2016';
        this.unit='Garda';
        */
    }
}