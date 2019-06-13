import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[pair-circle-ring]',
    templateUrl: './pair-circle-ring-spinner.component.html',
    styleUrls: ['./pair-circle-ring-spinner.component.scss']
})
export class PairCircleRingSpinnerComponent extends BaseSpinnerComponent {}
