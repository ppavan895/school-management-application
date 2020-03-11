import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolManagementApplication2020SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [SchoolManagementApplication2020SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
