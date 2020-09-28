import { NgModule } from '@angular/core';
import { CaControlComponent } from './ca-control.component';
import { PatternModule } from '../pattern/pattern.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CaControlComponent
  ],
  imports: [
    CommonModule,
    PatternModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    CaControlComponent
  ],
  providers: []
})
export class CaControlModule {

}
