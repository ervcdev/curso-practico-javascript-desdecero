console.group('Cuadrado')

//claculando el perimetro
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4; 
const areCuadrado = ladoCuadrado * ladoCuadrado;

console.log(
    ladoCuadrado,
    perimetroCuadrado,
    areCuadrado
);

//claculando el perimetro con funciones
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

//agrupar los console en grupos para imprimirlos
console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 4;  
const ladoTrianguloBase = 1;
const alturaTriagulo = 5.5;

//Perimetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriagulo) / 2;


console.log(
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase, 
    alturaTriagulo,
    perimetroTriangulo,
    areaTriangulo
    
    );

//Perimetro con función
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}
console.groupEnd('Triangulo')


