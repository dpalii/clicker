import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  public mode = '5';

  constructor() { }

  ngOnInit(): void {
  }

  handleModeChange(event: MatButtonToggleChange) {
    this.change.emit(event.value);
    this.mode = event.value;
  }
}
