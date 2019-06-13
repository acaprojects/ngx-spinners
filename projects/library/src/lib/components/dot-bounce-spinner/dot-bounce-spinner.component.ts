import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[dot-bounce]',
    templateUrl: './dot-bounce-spinner.component.html',
    styleUrls: ['./dot-bounce-spinner.component.scss']
})
export class DotBounceSpinnerComponent extends BaseSpinnerComponent {}
