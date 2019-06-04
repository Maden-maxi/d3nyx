import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'd3nyx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() length: number;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [10, 100, 1000];
  pageIndex = 0;
  navSize = 5;
  @Output() page = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  get pages(): number[] {
    const pagesCount = Math.ceil(this.length / this._pageSize);
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }
  get isFirst() {
    return !this.pageIndex;
  }
  get isLast() {
    return this.pageIndex > (this.pages.length - 1 - this.navSize);
  }
  _pageSize = 10;
  constructor() {

  }

  ngOnInit() {
    this._pageSize = this.pageSize;
  }
  firstPage() {
    this.pageIndex = 0;
    this.page.emit(this.pageIndex);
  }
  lastPage() {
    this.pageIndex = this.pages.length - 1;
    this.page.emit(this.pageIndex);
  }
  prev() {
    this.pageIndex = this.pageIndex - 1;
    this.page.emit(this.pageIndex);
  }
  next() {
    this.pageIndex = this.pageIndex + 1;
    this.page.emit(this.pageIndex);
  }
  navigateTo(index) {
    this.pageIndex = index;
    this.page.emit(this.pageIndex);
  }
  changePageSize() {
    this.pageIndex = 0;
    this.pageSizeChange.emit( parseInt(this._pageSize + '', 10) );
    this.page.emit(this.pageIndex);
  }
}
