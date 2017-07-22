import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-market-name',
  templateUrl: './test-market-name.component.html',
  styleUrls: ['./test-market-name.component.css']
})
export class TestMarketNameComponent implements OnInit {
  @Input()
  _marketNames = '';
  @Input()
  _marketMsg = '';
   @Input()
  _pipesOptions = '';
  @Input()
  _exchangeName = '';

  filter = '';
  constructor() { }

  ngOnInit() {
  }

}
