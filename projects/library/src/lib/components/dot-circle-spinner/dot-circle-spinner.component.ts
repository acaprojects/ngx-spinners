import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[dot-circle]',
    templateUrl: './dot-circle-spinner.component.html',
    styleUrls: ['./dot-circle-spinner.component.scss']
})
export class DotCircleSpinnerComponent extends BaseSpinnerComponent {}
