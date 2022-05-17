import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.less']
})
export class AdminMainComponent implements OnInit {

  constructor(private router: Router,public auth: AuthService) { }

  ngOnInit(): void {
  }

}
