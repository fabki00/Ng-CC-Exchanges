import { Component, OnInit, Input } from '@angular/core';

import { TestMarketsPipeOptions } from './../../../models/shared/test-markets-pipe-options';
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

  pipesOptions: TestMarketsPipeOptions;
  constructor() { }

  ngOnInit() {
    this.pipesOptions = new TestMarketsPipeOptions();
  }

}
