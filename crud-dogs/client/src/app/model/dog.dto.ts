export class DogDTO {
  id: number;
  nome: string;
  data_nascimento: string;
  responsavel: string;
  contato: string;
  endereco: string;
  raca: string;
  peso: number;
  porte: string;

  constructor(nome: string, data_nascimento: string, responsavel: string,
    contato: string,endereco: string, raca: string,
    peso: number, porte: string, id: number = null){
      this.id = id;
    this.nome = nome;
    this.data_nascimento = data_nascimento;
    this.responsavel = responsavel;
    this.contato = contato;
    this.endereco = endereco;
    this.raca = raca;
    this.peso = peso;
    this.porte = porte;
  }
}
