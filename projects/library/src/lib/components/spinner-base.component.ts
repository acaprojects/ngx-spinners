import { Component, Input } from "@angular/core";

@Component({ template: '' })
export class BaseSpinnerComponent {
    /** CSS class to add to the root component */
    @Input() public klass = 'default';
    /** Colour of the spinner element */
    @Input() public color = '#039be5';
}
