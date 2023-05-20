import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {
  @Input() name: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
