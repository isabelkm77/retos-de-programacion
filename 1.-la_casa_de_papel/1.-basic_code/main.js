var capital = prompt("Introduce una capital y te diré si es uno de los miembros de mi equipo");


if ('Berlín' === capital || capital === 'Tokio' || capital === 'Moscú') {
    alert('Si ' + capital + ' es una capital y es miembro de nuestro equipo');
} else {
    alert('No es un nombre de capital de uno de los miembros de mi equipo');
}

var capital = prompt("Introduce una capital y te diré si es uno de los miembros de mi equipo");

if (checkCapital(capital)) {
    alert('Si ' + capital + ' es una capital y es miembro de nuestro equipo');
} else {
    alert('No es un nombre de capital de uno de los miembros de mi equipo');
}

function checkCapital(capital) {
    if (capital === 'Berlín' || capital === 'Tokio' || capital === 'Moscú') {

        return true;
    }
}

var capital = prompt("Introduce una capital y te diré si es uno de los miembros de mi equipo");


switch (checkCapital(capital)) {
    case true:
        alert('Si ' + capital + ' es una capital y es miembro de nuestro equipo');
        break;
    default:
        alert('No es un nombre de capital de uno de los miembros de mi equipo');
        break;
}

function checkCapital(capital) {
    if (capital === 'Berlín' || capital === 'Tokio' || capital === 'Moscú') {

        return true;
    }
}


var capital = prompt("Introduce una capital y te diré si es uno de los miembros de mi equipo");
var capitalesNuestras = ["Berlín", "Tokio", "Moscú"];
capitalesNuestras.forEach(function(elemento, indice, array) {
    if (capital.includes(capitalesNuestras)) {
        alert('Si ' + capital + ' es una capital y es miembro de nuestro equipo');
    } else {
        alert('No es un nombre de capital de uno de los miembros de mi equipo');
    }
});