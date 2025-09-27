class Atleta{
  constructor(nome, idade, peso, altura, notas){// criando as variáveis de instância
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
    
  }

  calculaCategoria(){//definindo a categoria
    if(this.idade >= 9 && this.idade <= 11){
      return "Infantil"
    } else if(this.idade === 12 || this.idade === 13){
       return "Juvenil" 
    } else if(this.idade === 14 || this.idade === 15){
       return "Intermediário" 
    } else if(this.idade >= 16 && this.idade <= 30){
       return "Adulto"
    } else {
      return "demais idades"
    }
  }

  calculaIMC(){//cálculo do imc
    let imc = this.peso / (this.altura * this.altura)
    return imc
  }

  calculaMediaValida(){//cálculo da media usando tres notas
    let soma = 0
    let media = 0  
    this.notas.sort((a,b) => b-a)
    let notas3 = this.notas.slice(1,4)
    
    notas3.forEach(function(nota){
      soma += nota
    })
    media = soma / notas3.length
    return media
  }

  obtemNomeAtleta(){
    return this.nome
  }

  obtemIdadeAtleta(){
    return this.idade
  }

  obtemPesoAtleta(){
    return this.peso
  }

  obtemNotasAtleta(){
    return this.notas
  }

  obtemCategoria(){
    return this.calculaCategoria()
  }

  obtemIMC(){
    return this.calculaIMC()
  }

  obtemMediaValida(){
    return this.calculaMediaValida()
  }

  obtemSaida(){//gerando a saída
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Peso: ${this.peso}`)
    console.log(`Altura: ${this.altura}`)
    console.log(`Notas: ${this.notas}`)
    console.log(`Categoria: ${this.calculaCategoria()}`)
    console.log(`IMC: ${this.obtemIMC()}`)
    console.log(`Média Válida: ${this.obtemMediaValida()}`)
    console.log("")

  }

}



//instaciando 4 vezes a classe
const atleta1 = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

const atleta2 = new Atleta("Fernando Puntel", 17, 77, 1.90, [8, 10, 10, 7, 9.33])

const atleta3 = new Atleta("Daiane Jelinsky", 13, 55, 1.63, [7, 10, 9.5, 9.5, 8])

const atleta4 = new Atleta("Bruno Castro", 10, 62, 1.40, [10, 10, 10, 9, 9.5])

//saídas da classe instaciada
 atleta1.obtemSaida()
 atleta2.obtemSaida() 
 atleta3.obtemSaida()
 atleta4.obtemSaida()