import { Component } from '@angular/core';

export interface Menu {
  color: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menus: Menu[] = [
    { text: 'Login', color: 'lightblue', icon: 'verified_user' },
    { text: 'Profile', color: 'lightgreen', icon: 'account_circle' },
    { text: 'Favorites', color: '#DDBDF1', icon: 'favorite' }
  ];
}
