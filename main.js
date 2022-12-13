//Entregable 1 Calculadora de Calorías

let nombreUsuario = prompt('¡Hola! Ingresa tú nombre por favor')
alert('Bienvenid@ ' + ' ' + nombreUsuario + ' ')

let aviso = (' Te voy a ayudar a calcular las calorías que debes ingerir de acuerdo a tú peso y altura.')
alert(nombreUsuario + ' ' + aviso)
    //if y  else


//Ciclo
let sexoValido = false;
//constantes de uso generico

const sMasculino = 'H';
const sFemenino = 'M';
let sexo = sMasculino
let calculoDeKCalorias = 0;

do {
    sexo = prompt('Ingresa tu sexo, H si eres hombre, M si eres mujer');
    if (sexo === sFemenino)
        sexoValido = true;
    else if (sexo === sMasculino)
        sexoValido = true;
    else
        alert('El sexo ingresado, no es valido, intenta de nuevo')

} while (!sexoValido);

//invocar la funcion correspondiente de acuerdo al sexo ingresado
switch (sexo) {
    case 'M':
        enviarMensajeMujer();
        break;
    case 'H':
        enviarMensajeHombre();
        break;
    default:
        alert('Sexo ingresado no es valido');
        break;
}

function enviarMensajeMujer() {
    let peso = prompt('Peso (en kg ejemplo 68)');
    let altura = prompt('Altura (en cm ejemplo: 163)');
    let edad = prompt('Edad');
    calculoDeKCalorias = calcularcaloriasM(peso, altura, edad);
}

//declaracion de funciones para cuando es un caso u otro
function enviarMensajeHombre() {
    let peso = prompt('Peso (en kg ejemplo 68)');
    let altura = prompt('Altura (en cm ejemplo: 163)');
    let edad = prompt('Edad');
    calculoDeKCalorias = calcularcaloriasH(peso, altura, edad);
}



//Función para calcular calorías Mujer

function calcularcaloriasM(peso, altura, edad) {
    let cal = ((((peso * 10) + (altura * 6.25)) - (5 * edad)) - 161)
    alert(' Las Calorias que debes consumir de acuerdo a tu edad, peso y altura son: ' + cal);
    return cal;
}


//Función para calcular calorías hombre

function calcularcaloriasH(peso, altura, edad) {
    let cal = ((((peso * 10) + (altura * 6.25)) - (5 * edad)) + 5)
    alert(' Las Calorias que debes consumir de acuerdo a tu edad, peso y altura son: ' + cal);
    return cal;
}

/*SEGUNDA ENTREGA*/

//ARREGLOS Y OBJETOS//


const alimentos = [{
        nombre: '2 huevos revueltos,1 café americano, 1 taza de fruta, 2 tortillas',
        kcalorias: 500,
        tipo: 'desayuno',
        opcion: '1',

    },
    {
        nombre: '1 sandwich de jamon de pavo, 1 café americano, 1/2 taza de fruta con queso cottage',
        kcalorias: 580,
        tipo: 'desayuno',
        opcion: '2',

    },
    {
        nombre: 'ensalada de berros con atún, 1/2 aguacate, 1 taza de té, 10 almendras, 1 toronja',
        kcalorias: 600,
        tipo: 'desayuno',
        opcion: '3',

    },
    {
        nombre: '250 grs pechuga de pollo asada, ensalada de col, 1/2 taza de arroz, agua de jamaica',
        kcalorias: 850,
        tipo: 'comida',
        opcion: '1',

    },
    {
        nombre: '250 grs de salmon ahumado, ensalada de espinaca con jitomate, 1/2 taza de pure de papa, agua de limón con chia',
        kcalorias: 980,
        tipo: 'comida',
        opcion: '2',

    },
    {
        nombre: '250grs de filete de res asado, esparragos al vapor, ensalada de arugula, agua de tamarindo',
        kcalorias: 1100,
        tipo: 'comida',
        opcion: '3',

    },
    {
        nombre: 'enfrijoladas de queso fresco, 1 taza de te',
        kcalorias: 400,
        tipo: 'cena',
        opcion: '1',

    },
    {
        nombre: '2 huevos cocidos,1 café americano, 1 pan tostado',
        kcalorias: 680,
        tipo: 'cena',
        opcion: '2',

    },
    {
        nombre: 'ensalada de atun con verduras, 2 tostadas de maiz, 1 taza de té',
        kcalorias: 720,
        tipo: 'cena',
        opcion: '3',

    },

]

//obtenemos el listado de desayunos
const arregloDesayunos = alimentos.filter(alimento => alimento.tipo == 'desayuno');
const arregloComidas = alimentos.filter(alimento => alimento.tipo == 'comida');
const arregloCenas = alimentos.filter(alimento => alimento.tipo == 'cena');
let promptDesayuno = obtenerCadenaPrompt("desayuno", arregloDesayunos);
let promptComida = obtenerCadenaPrompt("comida", arregloComidas);
let promptCena = obtenerCadenaPrompt("cena", arregloCenas);
console.log("promptDesayuno", promptDesayuno);
console.log("promptComida", promptComida);
console.log("promptCena", promptCena);



//solicitamos al usuario que elija una opcion y guardamos en una variable
let opcionDesayunoElegida = prompt(promptDesayuno);
//filtramos de las opciones de desayuno, el que eligiò el usuario
let objDesayunoElegido = arregloDesayunos.find((desayuno) => desayuno.opcion === opcionDesayunoElegida)
console.log("Objeto de desayuno", objDesayunoElegido)

//solicitamos al usuario que elija una opcion y guardamos en una variable
let opcionComidaElegida = prompt(promptComida);
//filtramos de las opciones de comidas, el que eligiò el usuario
let objComidaElegida = arregloComidas.find((comida) => comida.opcion === opcionComidaElegida)
console.log("Objeto de comida", objComidaElegida)

//solicitamos al usuario que elija una opcion y guardamos en una variable
let opcionCenaElegida = prompt(promptCena);
//filtramos de las opciones de cenas, el que eligiò el usuario
let objCenaElegida = arregloCenas.find((cena) => cena.opcion === opcionCenaElegida)
console.log("Objeto de cena", objCenaElegida)




function obtenerCadenaPrompt(stringTipo, arregloTipoAlimento) {
    //generamos el prompt
    let stringPrompt = "Elija una opcion de  " + stringTipo + " ingresando el numero de la opcion deseada, los alimentos disponibles son: \n";
    for (let index = 0; index < arregloTipoAlimento.length; index++) {
        const element = arregloTipoAlimento[index];

        stringPrompt = stringPrompt + "Opcion: " + element.opcion + ".- " + element.nombre + ", calorias: " + element.kcalorias + "\n";
    }
    return stringPrompt;

}


//sumamos las calorias de cada opción de comida elegida
let KcaloriasAlimentos = ((objDesayunoElegido.kcalorias) + (objComidaElegida.kcalorias) + (objCenaElegida.kcalorias));
alert('De acuerdo a tu elección de alimentos el contenido calórico de tu menú es de :' + ' ' + KcaloriasAlimentos)