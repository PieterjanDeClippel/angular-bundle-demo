import { Component, Inject } from '@angular/core';
import { Position } from '@mintplayer/ng-bootstrap';

@Component({
  selector: 'demo-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  tooltipPosition = Position;

}
