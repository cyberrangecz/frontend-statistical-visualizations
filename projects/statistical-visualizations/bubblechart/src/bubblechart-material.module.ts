import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [CommonModule, MatCardModule, MatDividerModule, MatGridListModule],
    exports: [MatCardModule, MatDividerModule, MatGridListModule],
})
export class BubblechartMaterialModule {}
