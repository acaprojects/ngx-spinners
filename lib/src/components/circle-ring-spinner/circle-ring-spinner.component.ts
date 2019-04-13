import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[circle-ring]',
    templateUrl: './circle-ring-spinner.component.html',
    styleUrls: ['./circle-ring-spinner.component.scss']
})
export class CircleRingSpinnerComponent extends BaseSpinnerComponent {}
