import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FormsModule } from '@angular/forms';
import { TableHeadDirective } from './directives/table-head.directive';
import { TableRowDirective } from './directives/table-row.directive';

const EXPORTS = [

];

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TableComponent, PaginationComponent, PaginationPipe, SortByPipe, TableHeadDirective, TableRowDirective],
  exports: [TableComponent, PaginationComponent, PaginationPipe, SortByPipe, TableHeadDirective, TableRowDirective]
})
export class DataTableModule {}
