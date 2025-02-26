import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FilterMaterialModule } from './filter-material.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [FilterComponent],
    exports: [FilterComponent],
    imports: [CommonModule, FilterMaterialModule, MatIconModule],
})
export class FilterModule {
    // static forRoot(config: StatisticalVizConfig): ModuleWithProviders<FilterModule> {
    //   return {
    //     ngModule: FilterModule,
    //     providers: [
    //       {
    //         provide: StatisticalVizConfig,
    //         useValue: config,
    //       }
    //     ]
    //   }
    // }
}
