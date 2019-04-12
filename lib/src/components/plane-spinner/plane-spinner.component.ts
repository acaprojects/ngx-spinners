import { Component, OnInit } from '@angular/core';

import { BaseSpinnerComponent } from '../spinner-base.component';

@Component({
    selector: 'a-spinner[plane]',
    templateUrl: './plane-spinner.component.html',
    styleUrls: ['./plane-spinner.component.scss']
})
export class PlaneSpinnerComponent extends BaseSpinnerComponent {
    
}
