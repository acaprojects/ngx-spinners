import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[cube-grid]',
    templateUrl: './cube-grid-spinner.component.html',
    styleUrls: ['./cube-grid-spinner.component.scss']
})
export class CubeGridSpinnerComponent extends BaseSpinnerComponent {}
