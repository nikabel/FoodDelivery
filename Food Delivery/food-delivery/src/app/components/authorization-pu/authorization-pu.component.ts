import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization-pu',
  templateUrl: './authorization-pu.component.html',
  styleUrls: ['./authorization-pu.component.less']
})
export class AuthorizationPuComponent implements OnInit {

  reg=false;
  constructor() { }
  
  
  showForm():void{
    this.reg=!this.reg;
  }

  ngOnInit(): void {
  }

}
