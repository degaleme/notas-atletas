function mostrarAtletas(objAtletas){
  
  //dois for para ler cada item do objeto e em cada a matriz notas inserida
  for (let i = 0; i < objAtletas.length; i++) {
    
    let soma = 0;// reinicialização da soma a cada no leitura da matriz notas
    let media = 0
    console.log(`Atleta: ${objAtletas[i].nome}`);//nome da cada item do objeto
    console.log(`Notas Obtidas: ${objAtletas[i].notas}`)// matriz notas de cada item do objeto
    objAtletas[i].notas = objAtletas[i].notas.sort((a,b) => b-a)
    objAtletas[i].notas = objAtletas[i].notas.slice(1,4)
    
    for (let j = 0; j < objAtletas[i].notas.length; j++) {
      soma += objAtletas[i].notas[j];
    }

    media = soma / objAtletas[i].notas.length

    
    console.log(`Média Válida: ${media}`)//média de cada matriz notas de cada item do objeto
    console.log("")
  }
}

let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

mostrarAtletas(atletas)// chamando a função que tem como parâmetro o objeto