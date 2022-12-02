import { UtilModule } from './../../util/util.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { CardComponent } from './components/card/card.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CadastroComponent,
    CardComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    InputTextModule,
    FormsModule,
    UtilModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
