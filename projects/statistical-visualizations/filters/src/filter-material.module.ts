import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [CommonModule, MatCardModule, MatGridListModule, MatCheckboxModule],
    exports: [MatCardModule, MatGridListModule, MatCheckboxModule],
})
export class FilterMaterialModule {}
