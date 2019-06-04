import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TableHeaderCell } from './table-header-cell';
import { TableRowDirective } from '../directives/table-row.directive';

@Component({
  selector: 'd3nyx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() items: any[];
  @Input() headers: TableHeaderCell[];
  @Input() checkable = true;
  @ContentChild(TableRowDirective, {read: TemplateRef, static: true}) rowTemplate: TemplateRef<any>;
  itemsPerPage = 10;
  currentPage = 0;
  sortOrder;
  sortReverse;
  sortName = 'id';
  get checkedItems() {
    return this.items.filter(item => item.checked).length;
  }
  constructor() { }

  ngOnInit() {
    this.items = this.items.map(row => ({...row, checked: false}));
  }
  /**
   * All entities is checked
   * @returns {boolean}
   */
  get isAllChecked() {
    return this.items ? this.items.every(row => row.checked) : false;
  }
  /**
   * Check all entities
   * @param $event
   */
  checkAll($event) {
    this.items = this.items.map(row => ({...row, checked: $event.target.checked}));
  }

  getPage($event) {
    this.currentPage = $event;
  }
  onPerPage($event) {
    this.getPage(0);
    this.itemsPerPage = $event;
  }

  setSortOrder(param) {
    if (this.sortName === param) {
      if (this.sortOrder === undefined) {
        this.sortOrder = 'asc';
        this.sortReverse = false;
      } else if (this.sortOrder === 'asc') {
        this.sortOrder = 'desc';
        this.sortReverse = true;
      } else if (this.sortOrder === 'desc') {
        this.sortOrder = undefined;
        this.sortReverse = undefined;
        this.sortName = undefined;
      }
    } else {
      this.sortName = param;
      this.sortOrder = 'asc';
      this.sortReverse = false;
    }


  }

}
