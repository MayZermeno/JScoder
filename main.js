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

//declaracion de funciones para cuando es un caso u otro
function enviarMensajeHombre() {
    let peso = prompt('Peso (en kg ejemplo 68)');
    let altura = prompt('Altura (en cm ejemplo: 163)');
    let edad = prompt('Edad');
    calcularcaloriasH(peso, altura, edad, );
}

function enviarMensajeMujer() {
    let peso = prompt('Peso (en kg ejemplo 68)');
    let altura = prompt('Altura (en cm ejemplo: 163)');
    let edad = prompt('Edad');
    calcularcaloriasM(peso, altura, edad);
}

//Función para calcular calorías Mujer

function calcularcaloriasM(peso, altura, edad) {
    alert(' Las Calorias que debes consumir de acuerdo a tu edad, peso y altura son:' + ' ' + ((((peso * 10) + (altura * 6.25)) - (5 * edad)) - 161));
    return
}


//Función para calcular calorías hombre

function calcularcaloriasH(peso, altura, edad) {
    alert(' Las Calorias que debes consumir de acuerdo a tu edad, peso y altura son:' + ' ' + ((((peso * 10) + (altura * 6.25)) - (5 * edad)) + 5));
    return
}