import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Help', icon: 'fa fa-info-circle'},
      {label: 'Sign-Out', icon: 'fa fa-sign-out'},
  ];
  }

  onLogoClick() {
    alert('todo - reroute to home');
  }

  onMenuClick() {
    alert('todo - open menu');
  }

}
