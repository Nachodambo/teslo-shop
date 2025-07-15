import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gender-page',
  standalone: true,
  imports: [],
  templateUrl: './gender-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderPageComponent { }
