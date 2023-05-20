import { NgModule } from '@angular/core';
import { TerminalComponent } from './terminal/terminal.component';
import { CardButtonComponent } from './card-button/card-button.component';



@NgModule({
  declarations: [
    TerminalComponent,
    CardButtonComponent
  ],
  imports: [
  ],
  exports: [
    TerminalComponent,
    CardButtonComponent
  ]
})
export class ComponentLibModule { }
