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


/* ***************TTRIANGULO****************************** */
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


//********** CIRCULO****************
console.group('Ciculo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo *2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI; //q
const areaCirculo = (radioCirculo ** 2 ) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
    
})

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlcuadrado = Math.pow(radio, 2) //primero el numero y luego el numero que se va a elevar

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlcuadrado * Math.PI
    }

}


console.groupEnd('Circulo');


