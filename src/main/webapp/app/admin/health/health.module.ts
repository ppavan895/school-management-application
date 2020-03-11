import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolManagementApplication2020SharedModule } from 'app/shared/shared.module';

import { HealthComponent } from './health.component';
import { HealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [SchoolManagementApplication2020SharedModule, RouterModule.forChild([healthRoute])],
  declarations: [HealthComponent, HealthModalComponent],
  entryComponents: [HealthModalComponent]
})
export class HealthModule {}
