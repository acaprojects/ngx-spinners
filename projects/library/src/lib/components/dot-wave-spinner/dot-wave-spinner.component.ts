import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[dot-wave]',
    templateUrl: './dot-wave-spinner.component.html',
    styleUrls: ['./dot-wave-spinner.component.scss']
})
export class DotWaveSpinnerComponent extends BaseSpinnerComponent {}
