let calculoDeKCalorias = 0;
//mandamos llamar a la funcion que se encarga de llenar los menus
inicializaMenu();
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
    if (document.querySelectorAll('.error').length > 0) {
        Swal.fire({
            title: 'Lo sentimos',
            text: 'Por favor verifique haber ingresado todos los datos',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        })
    }
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
    if (inputCalorias.value != '')
        document.querySelector('#boton-Menu').disabled = false;
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

//obtiene los menus de forma asincrona
async function obtenerMenus() {
    const response = await fetch('data.json');
    console.log("Response", response.body)
    const data = await response.json();
    console.log("viene de la funcion de obtener menu", data);
    return data;
}


//inicializa el menu
async function inicializaMenu() {

    //generamos una variable para almacenar los menus
    let alimentos = [];
    //mandamos traer los menus del fetch de forma asincrona y esperamos a que acabe su ejecucion 
    alimentos = await obtenerMenus();


    //obtenemos el listado de desayunos

    const arregloDesayunos = alimentos.filter(alimento => alimento.tipo == 'desayuno');
    const arregloComidas = alimentos.filter(alimento => alimento.tipo == 'comida');
    const arregloCenas = alimentos.filter(alimento => alimento.tipo == 'cena');

    const selectDesayuno = document.getElementById('selectDesayunos');
    const selectComidas = document.getElementById('selectComidas');
    const selectCenas = document.getElementById('selectCenas');



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
}