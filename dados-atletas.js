class Atleta { 
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11){
      return "Infantil";
    } else if(this.idade === 12 || this.idade === 13) {
      return "Juvenil";
    } else if(this.idade >= 14 && this.idade <= 15){
      return "Intermediário";
    } else if(this.idade >= 16 && this.idade <= 30){
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }
  calculaIMC(){
const imc = this.peso / (this.altura * this.altura);
return imc.toFixed(2);
  }
  calculaMediaValida(){
 let notasValidas = this.notas.filter(nota => nota >= 0 && nota <= 10);
    const media = notasValidas.reduce((sum, nota) => sum + nota, 0) / notasValidas.length;
    return media.toFixed(2);
  }
  obtemNomeAtleta(){
return this.nome;
  }
  obtemIdadeAtleta(){
return this.idade;
  }
  obtemPesoAtleta(){
return this.peso
  }
  obtemNotasAtleta(){
return this.notas.join(",");
  }
  obtemCategoria(){
return this.calculaCategoria();
  }
  obtemIMC(){
return this.calculaIMC();
  }
  obtemMediaValida(){
return this.calculaMediaValida();
  }
  obtemAtltura(){
    return this.altura;
  }
}
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log("nome:", atleta.obtemNomeAtleta());
console.log("idade:", atleta.obtemIdadeAtleta());
console.log("peso:", atleta.obtemPesoAtleta());
console.log("altura:", atleta.obtemAtltura());
console.log("notas:", atleta.obtemNotasAtleta());
console.log("Categorias:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Media valida:", atleta.obtemMediaValida());
