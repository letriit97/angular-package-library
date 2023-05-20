import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @Input() value: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
