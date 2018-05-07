import { NgModule,  } from '@angular/core';
import { PodeComponent } from './pode/pode';

const components = [PodeComponent]
@NgModule({
	declarations: components,
	imports: components,
	exports: components,
  entryComponents: components
})
export class ComponentsModule { }
