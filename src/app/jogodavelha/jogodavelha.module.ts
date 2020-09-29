import { JogodavelhaService } from './componentes';
import { JogodavelhaComponent } from './jogodavelha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        JogodavelhaComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        JogodavelhaComponent
    ],
    providers: [
      JogodavelhaService
    ]
  })
  export class JogodavelhaModule { }