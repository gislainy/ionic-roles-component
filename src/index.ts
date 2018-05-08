import { NgModule,  } from '@angular/core';
import { PodeComponent } from './pode/pode';

import { IonicPageModule } from 'ionic-angular';
const components = [PodeComponent]
@NgModule({
	declarations: components,
	imports: [
		components,
		IonicPageModule.forChild(PodeComponent),
	],
	exports: components,
  entryComponents: components
})
export class RolesComponentModules { }
