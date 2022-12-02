import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() descricao: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicar(){
    this.onClick.emit();
  }

}
