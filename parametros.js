//parâmetros de função
              //245   //20
//function soma (num1, num2) {
//  return num1 + num2;
//}

console.log(soma(2,2))
console.log(soma(245,20))
console.log(soma(-500,60))

//parâmetros x argumentos 

//odem dos parâmetros

function nomeIdade(nome,idade) {
   return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40,"Juliana"));

function soma (num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1 , num2 = 1) {
    return num1 * num2;
}
                            //9        //6
console.log(multiplica(soma(4,5)))
