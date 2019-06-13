import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[ring-bounce]',
    templateUrl: './ring-bounce-spinner.component.html',
    styleUrls: ['./ring-bounce-spinner.component.scss']
})
export class RingBounceSpinnerComponent extends BaseSpinnerComponent {
    
}
