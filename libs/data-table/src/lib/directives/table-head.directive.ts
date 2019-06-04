import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[d3nyxTableHead]'
})
export class TableHeadDirective {

  constructor(public template: TemplateRef<any>) { }

}
