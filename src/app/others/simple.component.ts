import { Component, Input,OnChanges,SimpleChanges } from "@angular/core";

@Component({

  selector: 'simple',
  template: `you entered:{{simpleInput}}`
})
export class SimpleComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges) {
    for(let propertyName in changes)
    {
      let change=changes[propertyName];
      let current=JSON.stringify(change.currentValue);
      let previous=JSON.stringify(change.previousValue);
      console.log( propertyName +': currentValue = '+ current + ',previousValue= ' +previous);
    }

  }
  @Input()  simpleInput: string;
}
