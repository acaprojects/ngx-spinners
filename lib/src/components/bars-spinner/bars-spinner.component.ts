import { Component } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[bars]',
    templateUrl: './bars-spinner.component.html',
    styleUrls: ['./bars-spinner.component.scss']
})
export class BarsSpinnerComponent extends BaseSpinnerComponent {}
