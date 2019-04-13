import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[double-circle-ring]',
    templateUrl: './double-circle-ring-spinner.component.html',
    styleUrls: ['./double-circle-ring-spinner.component.scss']
})
export class DoubleCircleRingSpinnerComponent extends BaseSpinnerComponent {}
