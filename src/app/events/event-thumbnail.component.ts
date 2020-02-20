import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .pad-left {margin-left: 10px;}`
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;
  // someProperty: any = 'some value';
  // logFoo() {
  // console.log('foo');
  // }
}
