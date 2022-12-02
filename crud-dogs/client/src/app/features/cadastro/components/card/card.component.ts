import { DogDTO } from 'src/app/model/dog.dto';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() onExcluir = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<DogDTO>();
  @Input() dog: DogDTO;


  constructor() { }

  ngOnInit(): void {
  }

  excluirCard(id: number){

    this.onExcluir.emit(id);
  }

  editCard(dog: DogDTO){
console.log(dog);
    this.onEdit.emit(dog);
  }

}
