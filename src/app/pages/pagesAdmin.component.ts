import { Component } from '@angular/core';

import { MENU_ITEMS } from './pagesAdmin-menu';

@Component({
  selector: 'ngx-pagesAdmin',
  styleUrls: ['pagesAdmin.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesAdminComponent {

  menu = MENU_ITEMS;
}
