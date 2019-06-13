import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[ring-bounce-in]',
    templateUrl: './ring-bounce-in-spinner.component.html',
    styleUrls: ['./ring-bounce-in-spinner.component.scss']
})
export class RingBounceInSpinnerComponent extends BaseSpinnerComponent {}
