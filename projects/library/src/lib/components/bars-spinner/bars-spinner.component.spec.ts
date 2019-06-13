import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { BarsSpinnerComponent } from './bars-spinner.component';

describe('BarsSpinnerComponent', () => {
    let fixture: ComponentFixture<BarsSpinnerComponent>;
    let component: BarsSpinnerComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BarsSpinnerComponent],
            imports: [CommonModule]
        }).compileComponents();
        fixture = TestBed.createComponent(BarsSpinnerComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should have a box', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.rect')).toBeTruthy();
    }));
});
