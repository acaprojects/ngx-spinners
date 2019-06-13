import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { version } from './settings';

import * as dayjs_api from 'dayjs';
const dayjs = dayjs_api;

import { ReactiveFormsModule } from '@angular/forms';
import { BarsSpinnerComponent } from './components/bars-spinner/bars-spinner.component';
import { BounceSpinnerComponent } from './components/bounce-spinner/bounce-spinner.component';
import { CircleRingSpinnerComponent } from './components/circle-ring-spinner/circle-ring-spinner.component';
import { CubeGridSpinnerComponent } from './components/cube-grid-spinner/cube-grid-spinner.component';
import { CubeMoveSpinnerComponent } from './components/cube-move-spinner/cube-move-spinner.component';
import { DotBounceSpinnerComponent } from './components/dot-bounce-spinner/dot-bounce-spinner.component';
import { DotCircleScaleSpinnerComponent } from './components/dot-circle-scale-spinner/dot-circle-scale-spinner.component';
import { DotCircleSpinnerComponent } from './components/dot-circle-spinner/dot-circle-spinner.component';
import { DotWaveSpinnerComponent } from './components/dot-wave-spinner/dot-wave-spinner.component';
import { DoubleBounceSpinnerComponent } from './components/double-bounce-spinner/double-bounce-spinner.component';
import { DoubleCircleRingSpinnerComponent } from './components/double-circle-ring/double-circle-ring-spinner.component';
import { PairCircleRingSpinnerComponent } from './components/pair-circle-ring/pair-circle-ring-spinner.component';
import { PlaneSpinnerComponent } from './components/plane-spinner/plane-spinner.component';
import { RingBounceInSpinnerComponent } from './components/ring-bounce-in-spinner/ring-bounce-in-spinner.component';
import { RingBounceSpinnerComponent } from './components/ring-bounce-spinner/ring-bounce-spinner.component';
import { RingRotateSpinnerComponent } from './components/ring-rotate-spinner/ring-rotate-spinner.component';
import { BaseSpinnerComponent } from './components/spinner-base.component';


const COMPONENTS: Type<any>[] = [
    BarsSpinnerComponent,
    BounceSpinnerComponent,
    CircleRingSpinnerComponent,
    CubeGridSpinnerComponent,
    CubeMoveSpinnerComponent,
    DotBounceSpinnerComponent,
    DotCircleScaleSpinnerComponent,
    DotCircleSpinnerComponent,
    DotWaveSpinnerComponent,
    DoubleBounceSpinnerComponent,
    DoubleCircleRingSpinnerComponent,
    PairCircleRingSpinnerComponent,
    PlaneSpinnerComponent,
    RingBounceInSpinnerComponent,
    RingBounceSpinnerComponent,
    RingRotateSpinnerComponent
];

@NgModule({
    declarations: [
        BaseSpinnerComponent,
        ...COMPONENTS
    ],
    imports: [CommonModule],
    exports: [
        ...COMPONENTS
    ]
})
export class LibraryModule {
    public static version = 'local-dev';
    private static init = false;
    readonly build = dayjs();

    constructor() {
        if (!LibraryModule.init) {
            const now = dayjs();
            LibraryModule.init = true;
            const build = now.isSame(this.build, 'd') ? `Today at ${this.build.format('h:mmA')}` : this.build.format('D MMM YYYY, h:mmA');
            version(LibraryModule.version, build);
        }
    }
}

export { LibraryModule as ACA_SPINNER_MODULE };
export { LibraryModule as ASpinnerModule };
