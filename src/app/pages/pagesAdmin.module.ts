import { DashboardModule } from './dashboard/dashboard.module';
import { TablesModule } from './tables/tables.module';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesAdminComponent } from './pagesAdmin.component';
import { AdmindashboardModule } from './admindashboard/admindashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesAdminRoutingModule } from './pagesAdmin-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesAdminRoutingModule,
    DashboardModule,
    ThemeModule,
    TablesModule,
    NbMenuModule,
    AdmindashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesAdminComponent,
  ],
})
export class PagesAdminModule {
}
