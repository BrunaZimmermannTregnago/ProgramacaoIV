
import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { DogDTO } from 'src/app/model/dog.dto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, DoCheck {
  @Output() readonly onSalvar = new EventEmitter<DogDTO>();
  @Output() readonly onEdit = new EventEmitter<DogDTO>();
  @Input() dogEdit: DogDTO = null;

  id: number = null;
  nome: string;
  data_nascimento: string;
  responsavel: string;
  contato: string;
  endereco: string;
  raca: string;
  peso: number;
  porte: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.dogEdit);
    if(this.dogEdit != null&& this.id != this.dogEdit.id){
      this.setEditDog();
    }
  }

  salvar() {
    this.onSalvar.emit(new DogDTO(this.nome, this.data_nascimento, this.responsavel,
      this.contato, this.endereco, this.raca, this.peso, this.porte))

    this.nome = null;
    this.data_nascimento = null;
    this.responsavel = null;
    this.contato = null;
    this.endereco = null;
    this.raca = null;
    this.peso = null;
    this.porte = null;
  }

  editar() {
    this.onEdit.emit(new DogDTO(this.nome, this.data_nascimento, this.responsavel,
      this.contato, this.endereco, this.raca, this.peso, this.porte, this.id))

    this.dogEdit = null;
    this.id = null;
    this.nome = null;
    this.data_nascimento = null;
    this.responsavel = null;
    this.contato = null;
    this.endereco = null;
    this.raca = null;
    this.peso = null;
    this.porte = null;
  }

  setEditDog(){
    this.id = this.dogEdit.id;
    this.nome = this.dogEdit.nome;
    this.data_nascimento = this.dogEdit.data_nascimento;
    this.responsavel = this.dogEdit.responsavel;
    this.contato = this.dogEdit.contato;
    this.endereco = this.dogEdit.endereco;
    this.raca = this.dogEdit.raca;
    this.peso = this.dogEdit.peso;
    this.porte = this.dogEdit.porte;
  }
}
