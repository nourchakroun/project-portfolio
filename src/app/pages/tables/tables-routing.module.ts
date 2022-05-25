import { FeaturesComponent } from '../../list/features/features.component';
import { NewsComponent } from './news/news.component';
import { TablesiteComponent } from './tablesite/tablesite.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'site',
      component: TablesiteComponent,
    },
    {
      path: 'news',
      component: NewsComponent,
    },
    {
      path: 'features',
      component: FeaturesComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  TablesiteComponent,
  SmartTableComponent,
  TreeGridComponent,
];
