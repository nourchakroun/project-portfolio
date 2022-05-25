import { Component, Directive, NgModule } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserListComponent } from '../../../@core/mock/userList.component';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-tablesite',
  templateUrl: './tablesite.component.html',
  styleUrls: ['./tablesite.component.scss'],
})

export class TablesiteComponent {

 
  

  constructor() {
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
