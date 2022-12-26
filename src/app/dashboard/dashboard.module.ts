import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { CreateUpdateStatusComponent } from './create-update-status/create-update-status.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatusCardComponent } from './status-card/status-card.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StatusListComponent, TagListComponent, CreateUpdateStatusComponent, StatusCardComponent, DateAgoPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
