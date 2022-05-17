import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  aut=false;
  cart=false;
  
  
  showAuth():void{
    this.aut=!this.aut;
  }
  showCart():void{
    this.cart=!this.cart;
  }

  constructor(private router: ActivatedRoute, public auth: AuthService,
              @Inject(DOCUMENT) private doc: Document
  ) {
  }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({returnTo: this.doc.location.origin});
  }

}
