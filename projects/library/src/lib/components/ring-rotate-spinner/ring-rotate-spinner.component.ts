import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[ring-rotate]',
    templateUrl: './ring-rotate-spinner.component.html',
    styleUrls: ['./ring-rotate-spinner.component.scss']
})
export class RingRotateSpinnerComponent extends BaseSpinnerComponent {}
