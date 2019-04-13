import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[dot-circle-scale]',
    templateUrl: './dot-circle-scale-spinner.component.html',
    styleUrls: ['./dot-circle-scale-spinner.component.scss']
})
export class DotCircleScaleSpinnerComponent extends BaseSpinnerComponent {}
