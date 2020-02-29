import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Constants } from 'src/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: Constants.help, icon: 'fa fa-info-circle', command: (event) => this.handleMenuItemClick(event)},
      {label: Constants.signOut, icon: 'fa fa-sign-out', command: (event) => this.handleMenuItemClick(event)},
  ];
  }

  onLogoClick() {
    this.router.navigateByUrl('/');
  }

  handleMenuItemClick(event) {
    if (event.item.label === 'Help') {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else if (event.item.label === Constants.signOut) {
      this.router.navigateByUrl('/');
    }
  }


}
