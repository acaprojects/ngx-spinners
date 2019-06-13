import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[cube-move]',
    templateUrl: './cube-move-spinner.component.html',
    styleUrls: ['./cube-move-spinner.component.scss']
})
export class CubeMoveSpinnerComponent extends BaseSpinnerComponent {}
