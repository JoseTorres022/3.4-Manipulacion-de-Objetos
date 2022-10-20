//--------------------------------------------------//
            //Acceso a elementos del DOM
//--------------------------------------------------//
//Obtiene un elemento segun su id
document.getElementById('alguna ID');

//Obtiene una lista con los elementos que tienen esa clase
document.getElementsByClassName('alguna Class');

//Obtiene una HTMLCollection con todos los elementos 'LI'
document.getElementsByTagName('LI');

//Devuelve el primer elemento del documento que cumpla
//la seleccion (la notacion es como en  CSS.
document.querySelector('.AlgunaClass');

//Devuelve una lista de elemetos que cumplan con la
//seleccion (notacion como en CSS)
document.querySelectorAll('div.note , div.alert');
//--------------------------------------------------//



//--------------------------------------------------//
            //Acceder a hijos/padres de un elemento
//--------------------------------------------------//
// Obtener los hijos de un elemento
var elem = document.getElementById('someid');
var hijos = elem.childNodes;

// Su nodo padre
var padre = elem.parentNode;
//--------------------------------------------------//


//--------------------------------------------------//
            //Crear nuevos elementos en el DOM
//--------------------------------------------------//
// Para crear elementos llamamos a createElement con el 
//nombre del element
var nuevoH1 = document.createElement('h1');
var nuevoParrafo = document.createElement('p');

// Crear nodos de texto para un elemento
var textoH1 = document.createTextNode('Hola mundo!');
var textoParrafo = document.createTextNode('lorem ipsum...');

// Añadir el texto a los elementos
nuevoH1.appendChild(textoH1);
nuevoParrafo.appendChild(textoParrafo);

// también podemos asignar directamente el valor a la 
//propiedad innerHTML
nuevoH1.innerHTML = textoH1
nuevoParrafo.innerHTML = textoParrafo

// los elementos estarían listos para añadirlos al DOM, 
//ahora mismo solo existen en memoria, pero no serán 
//visibles hasta que no los añadamos a un elemento del DOM


//--------------------------------------------------//
            //Añadir elementos al DOM
//--------------------------------------------------//
// seleccionamos un elemento
var cabecera = document.getElementById('cabecera');

// Añadir elementos hijos a un elemento
cabecera.appendChild(nuevoH1);
cabecera.appendChild(nuevoParrafo);

// También podemos añadir elementos ANTES del elemento 
//seleccionado

// Tomamos el padre
var padre = cabecera.parentNode;

// Insertamos el h1 antes de la cabecera
padre.insertBefore(nuevoH1, cabecera);


//--------------------------------------------------//
            //Añadir/Eliminar/Modificar Clases
//--------------------------------------------------//
// Tomamos un elemento
var cabecera = document.getElementById('cabecera');

// elimina una clase del elemento
cabecera.classList.remove('foo');

// Añade una clase si no existe
cabecera.classList.add('otra');

// añade o elimina varias clases a la vez
cabecera.classList.add('foo', 'bar');
cabecera.classList.remove('foo', 'bar');

// Si la clase existe la elimina, si no existe, la crea
cabecera.classList.toggle('visible');

// Devuelve true si el elemento contiene esa clase
cabecera.classList.contains('foo');