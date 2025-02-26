import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule, MatCheckboxModule],
    exports: [MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule, MatCheckboxModule],
})
export class BarchartMaterialModule {}
