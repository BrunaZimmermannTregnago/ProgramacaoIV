import { CadastroService } from './../../../../services/cadastro.service';
import { DogDTO } from 'src/app/model/dog.dto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Output() onEditar = new EventEmitter<DogDTO>();

  listaDogs: Array<DogDTO> = [];
  dogEdit: DogDTO = null;

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {

    this.carregarDogs();
  }

  salvar(dog: DogDTO) {

    this.cadastroService.saveDog(dog).subscribe(() => {
      console.log("SALVO COM SUCESSO!");

      this.carregarDogs();
    });
  }


  saveEdit(dog: DogDTO) {
    console.log(dog);
    this.dogEdit = null;
    this.cadastroService.editDog(dog).subscribe(() => {
      console.log("SALVO COM SUCESSO!");
      this.carregarDogs();
    });
  }

  carregarDogs() {
    this.cadastroService.getDogs().subscribe(listaDogsBack => this.listaDogs = listaDogsBack);
  }

  excluir(id: number) {
    this.cadastroService.deleteDog(id).subscribe(() => {
      console.log('EXCLUIDO COM SUCESSO');

      this.carregarDogs();
    });
  }

  editar(dog: DogDTO) {
    console.log('editar', dog);
    this.dogEdit = dog;
  }

}
