import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[bounce]',
    templateUrl: './bounce-spinner.component.html',
    styleUrls: ['./bounce-spinner.component.scss']
})
export class BounceSpinnerComponent extends BaseSpinnerComponent {
    
}
