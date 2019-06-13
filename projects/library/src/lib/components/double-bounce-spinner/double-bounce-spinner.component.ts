import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[double-bounce]',
    templateUrl: './double-bounce-spinner.component.html',
    styleUrls: ['./double-bounce-spinner.component.scss']
})
export class DoubleBounceSpinnerComponent extends BaseSpinnerComponent {}
