/**
 * @Author: Alex Sorafumo
 * @Date:   09/12/2016 9:39 AM
 * @Email:  alex@yuion.net
 * @Filename: index.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 06/02/2017 11:28 AM
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { LIBRARY_SETTINGS } from './settings';

import { BaseSpinnerComponent } from './components/spinner-base.component';
import { PlaneSpinnerComponent } from './components/plane-spinner/plane-spinner.component';
import { BounceSpinnerComponent } from './components/bounce-spinner/bounce-spinner.component';
import { RingBounceSpinnerComponent } from './components/ring-bounce-spinner/ring-bounce-spinner.component';
import { RingRotateSpinnerComponent } from './components/ring-rotate-spinner/ring-rotate-spinner.component';
import { RingBounceInSpinnerComponent } from './components/ring-bounce-in-spinner/ring-bounce-in-spinner.component';
import { DoubleBounceSpinnerComponent } from './components/double-bounce-spinner/double-bounce-spinner.component';
import { BarsSpinnerComponent } from './components/bars-spinner/bars-spinner.component';
import { CubeMoveSpinnerComponent } from './components/cube-move-spinner/cube-move-spinner.component';
import { CubeGridSpinnerComponent } from './components/cube-grid-spinner/cube-grid-spinner.component';
import { DotBounceSpinnerComponent } from './components/dot-bounce-spinner/dot-bounce-spinner.component';
import { DotCircleSpinnerComponent } from './components/dot-circle-spinner/dot-circle-spinner.component';
import { DotCircleScaleSpinnerComponent } from './components/dot-circle-scale-spinner/dot-circle-scale-spinner.component';
import { CircleRingSpinnerComponent } from './components/circle-ring-spinner/circle-ring-spinner.component';
import { DoubleCircleRingSpinnerComponent } from './components/double-circle-ring/double-circle-ring-spinner.component';

import * as day_api from 'dayjs';
const dayjs = day_api;

const COMPONENTS: Type<any>[] = [
    BaseSpinnerComponent,
    PlaneSpinnerComponent,
    BounceSpinnerComponent,
    RingBounceSpinnerComponent,
    RingRotateSpinnerComponent,
    RingBounceInSpinnerComponent,
    DoubleBounceSpinnerComponent,
    BarsSpinnerComponent,
    CubeMoveSpinnerComponent,
    CubeGridSpinnerComponent,
    DotBounceSpinnerComponent,
    DotCircleSpinnerComponent,
    DotCircleScaleSpinnerComponent,
    CircleRingSpinnerComponent,
    DoubleCircleRingSpinnerComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule],
    exports: [...COMPONENTS]
})
class LibraryModule {
    public static version = '0.1.0';
    private static init = false;
    private build = dayjs(1552621020000);

    constructor() {
        if (!LibraryModule.init) {
            const now = dayjs();
            LibraryModule.init = true;
            const build = now.isSame(this.build, 'd')
                ? `Today at ${this.build.format('h:mmA')}`
                : this.build.format('D MMM YYYY, h:mmA');
            LIBRARY_SETTINGS.version(LibraryModule.version, build);
        }
    }
}

export { LibraryModule as ACA_SPINNER_MODULE };
export { LibraryModule as ASpinnerModule };
