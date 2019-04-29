// Tipo Arrey Vazio 
let listaVasia = [];

// Tipo Arrey Valores definidos
let listaValor = [1,2,3,];

//buscar valor dentro do arrey
//retorna o valor
let item =listaValor.find(f => f =='ygor');
console.log(item);

//retorna uma nova lista
let itemFilter = listaValor.filter(i => i == 'ygor')
console.log(itemFilter);

//Meu informa o tamanho do meu areey
console.log(listaValor.length);

// Adicionar itens na fila
listaValor.log('Ana');
console.log(listaValor);

// Excluir intes da lista <- ultimo 
listaValor.pop();
console.log(listaValor);

// Excluir determinada posição 
let index = listaValor.indexOf('ygor');
console.log(listaValor.splice(0,index));
