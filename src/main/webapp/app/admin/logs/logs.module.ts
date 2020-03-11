import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolManagementApplication2020SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [SchoolManagementApplication2020SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
