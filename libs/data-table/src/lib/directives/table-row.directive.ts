import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[d3nyxTableRow]'
})
export class TableRowDirective {

  constructor(public template: TemplateRef<any>) { }

}
