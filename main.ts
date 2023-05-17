import { Direccion } from "./direccion";
import { Persona } from "./persona";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

// Creamos el array de personas vacío:
let personas: Persona[] = [];

// Añadimos los tres registros de personas:

personas.push( new Persona(
    'Lucia', 
    'García', 
    24, 
    '10928384H',
    '03/02/1998',
    'azul',
    'mujer',
    new Direccion(
        'Luis Buñuel',
        8,
        7,
        'C',
        83475,
        'Badajoz',
        'Extremadura'
    ),
    new Mail(
        'Personal',
        'lugar@gmail.com'
    ),
    new Telefono(
        'Personal',
        672554378
    ),
    'Busco piso en Madrid Centro'
) );

personas.push( new Persona(
    'Juan', 
    'Gomez', 
    70, 
    '72635491K',
    '17/01/1953',
    'verde',
    'hombre',
    new Direccion(
        'Dominica Gonzalez',
        73,
        2,
        'D',
        72635,
        'Huelva',
        'Huelva'
    ),
    new Mail(
        'Personal',
        'aceitunero@gmail.com'
    ),
    new Telefono(
        'Personal',
        679875544
    ),
    'Me gusta pasear por los olivos en primavera'
) );

personas.push( new Persona(
    'Carla', 
    'Perez', 
    13, 
    '635492837T',
    '28/02/2010',
    'amarillo',
    'mujer',
    new Direccion(
        'Ramon Gomez',
        21,
        1,
        'A',
        24678,
        'Pamplona',
        'Navarra'
    ),
    new Mail(
        'Personal',
        'carla_perez@gmail.com'
    ),
    new Telefono(
        'Personal',
        671691862
    ),
    'De mayor quiero ser tiktoker'
) );

// Mostramos el registro de las tres personas anteriores con un console.log:
for(let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}

// Modificación de un registro buscándolo por DNI:

let persona: Persona = personas.filter(p=> p.dni=='72635491K')[0];
let nuevaDireccion: Direccion = new Direccion(
    'Ernesto Pardo', 
    15,3,'B', 29384, 'Madrid', 'Madrid'
)
let nuevoEmail: Mail = new Mail(
    'Personal', 
    'bajolasombradelolivo@hotmail.com'
)
let nuevoTelefono: Telefono = new Telefono(
    'Empresa',
    672634521
)

// Sacamos los datos ahora mismo almacenados y añadimos los nuevos:

persona.mails.pop();
persona.mails.push(nuevoEmail);

persona.direcciones.pop();
persona.direcciones.push(nuevaDireccion);

persona.telefonos.pop();
persona.telefonos.push(nuevoTelefono);

// Volvemos a imprimir por consola el cambio:
console.log(persona);

