// Entregaable 3 modificación con DOM


document.querySelector('#input-altura').addEventListener("keyup", calcularCalorias)
document.querySelector('#input-edad').addEventListener("keyup", calcularCalorias)
document.querySelector('#select-sexo').addEventListener("change", calcularCalorias)
document.querySelector('#input-altura').addEventListener("keyup", calcularCalorias)

let calculoDeKCalorias = 0;

//Objeto que hace referencia al usuario 
let persona = {
    "peso": 0,
    "edad": 0,
    "sexo": 'M',
    "altura": 0,
    "nombre": '',
    "calorias": 0,
}

//Aquí se calculan las calorías y se verifica que todos los input tengan texto
function calcularCalorias() {
    const nombreElement = document.querySelector('#input-nombre');
    const edadElement = document.querySelector('#input-edad');
    const sexoElement = document.querySelector('#select-sexo');
    const pesoElement = document.querySelector('#input-peso');
    const alturaElement = document.querySelector('#input-altura');
    const arregloElementos = [nombreElement, edadElement, pesoElement, alturaElement];
    arregloElementos.forEach(element => {
        verificaTieneTexto(element);
    });
    //Se le asigna el valor de lo ingresado por el usuario

    persona.peso = pesoElement.value;
    persona.edad = edadElement.value;
    persona.sexo = sexoElement.value;
    persona.nombre = nombreElement.value;
    persona.altura = alturaElement.value;


    //JSON y Local storage
    localStorage.setItem('persona', JSON.stringify(persona));
    const personaLs = JSON.parse(localStorage.getItem('persona'))
    console.log(personaLs)

    //Validación para devolver resultado segun H o M

    const cuantosElementosConErroresHay = document.querySelectorAll('.error')
    if (cuantosElementosConErroresHay.length > 0)
        return;
    switch (sexoElement.value) {
        case 'M':
            calculoDeKCalorias = calcularcaloriasM(persona);
            break;
        case 'H':
            calculoDeKCalorias = calcularcaloriasH(persona);
            break;
    }
    let inputCalorias = document.querySelector('#input-calorias');
    inputCalorias.value = calculoDeKCalorias;


}


function verificaTieneTexto(elementoHtml) {

    if (elementoHtml.value == '') {
        elementoHtml.classList.add('error');
        elementoHtml.classList.remove('correcto');
    } else {
        elementoHtml.classList.add('correcto');
        elementoHtml.classList.remove('error');
    }

}

//Función para calcular calorías Mujer

function calcularcaloriasM(persona) {
    let cal = ((((persona.peso * 10) + (persona.altura * 6.25)) - (5 * persona.edad)) - 161)
    persona.calorias = cal;
    return cal;
}

//Función para calcular calorías hombre

function calcularcaloriasH(persona) {
    let cal = ((((persona.peso * 10) + (persona.altura * 6.25)) - (5 * persona.edad)) + 5)
    persona.calorias = cal;
    return cal;
}


//Eleccion de menú

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

    }

]

// //obtenemos el listado de desayunos
const arregloDesayunos = alimentos.filter(alimento => alimento.tipo == 'desayuno');
const arregloComidas = alimentos.filter(alimento => alimento.tipo == 'comida');
const arregloCenas = alimentos.filter(alimento => alimento.tipo == 'cena');

const selectDesayuno = document.getElementById('selectDesayunos');
const selectComidas = document.getElementById('selectComidas');
const selectCenas = document.getElementById('selectCenas');

//FOR ANIDADO

// const menuFinal = [arregloDesayunos, arregloComidas, arregloCenas];
// menuFinal[0]
// for (let index = 0; index < menuFinal.length; index++) {
//     let fila = menuFinal[index];
//     for (let x = 0; x < fila.length; x++) { console.log(fila[x]); }


// }

//Generar de manera dinámica las opciones del select


for (let index = 0; index < arregloDesayunos.length; index++) {
    const opcionDesayuno = arregloDesayunos[index];

    let option = document.createElement('option');
    option.value = opcionDesayuno.opcion;
    option.innerHTML = opcionDesayuno.nombre + ' ' + opcionDesayuno.kcalorias + 'kcal';
    selectDesayuno.appendChild(option);

}
for (let index = 0; index < arregloComidas.length; index++) {
    const opcionComidas = arregloComidas[index];

    let option = document.createElement('option');
    option.value = opcionComidas.opcion;
    option.innerHTML = opcionComidas.nombre + ' ' + opcionComidas.kcalorias + 'kcal';
    selectComidas.appendChild(option);

}
for (let index = 0; index < arregloCenas.length; index++) {
    const opcionCenas = arregloCenas[index];

    let option = document.createElement('option');
    option.value = opcionCenas.opcion;
    option.innerHTML = opcionCenas.nombre + ' ' + opcionCenas.kcalorias + 'kcal';
    selectCenas.appendChild(option);

}