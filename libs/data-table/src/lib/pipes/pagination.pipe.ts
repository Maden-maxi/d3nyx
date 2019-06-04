import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], currentPage: number, pageSize: number): any {
    return value.slice(currentPage, pageSize);
  }

}
