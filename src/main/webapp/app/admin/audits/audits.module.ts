import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolManagementApplication2020SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [SchoolManagementApplication2020SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
