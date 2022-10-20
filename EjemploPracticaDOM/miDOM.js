var box2 = document.getElementById('box2');
box2.insertAdjacentHTML('beforebegin', '<div><p>Texto 3: creado en JS con DOM en el div del Texto 2: beforebegin</p></div>');
// beforebegin - El nuevo HTML es insertado justo antes del elemento, a la misma altura (hermano).
// afterbegin - El nuevo HTML se inserta dentro del elemento, antes del primer hijo.
// beforeend - El nuevo HTML se inserta dentro del elemento, después del último hijo.
// afterend - El nuevo HTML es insertado justo después del elemento, a la misma altura (hermano).

var box3 = document.getElementById('box3');
box3.insertAdjacentHTML('beforebegin', '<div><p>Texto 4: creado en JS con DOM en su propio div</p></div');