"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var persona_1 = require("./persona");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
// Creamos el array de personas vacío:
var personas = [];
// Añadimos los tres registros de personas:
personas.push(new persona_1.Persona('Lucia', 'García', 24, '10928384H', '03/02/1998', 'azul', 'mujer', new direccion_1.Direccion('Luis Buñuel', 8, 7, 'C', 83475, 'Badajoz', 'Extremadura'), new mail_1.Mail('Personal', 'lugar@gmail.com'), new telefono_1.Telefono('Personal', 672554378), 'Busco piso en Madrid Centro'));
personas.push(new persona_1.Persona('Juan', 'Gomez', 70, '72635491K', '17/01/1953', 'verde', 'hombre', new direccion_1.Direccion('Dominica Gonzalez', 73, 2, 'D', 72635, 'Huelva', 'Huelva'), new mail_1.Mail('Personal', 'aceitunero@gmail.com'), new telefono_1.Telefono('Personal', 679875544), 'Me gusta pasear por los olivos en primavera'));
personas.push(new persona_1.Persona('Carla', 'Perez', 13, '635492837T', '28/02/2010', 'amarillo', 'mujer', new direccion_1.Direccion('Ramon Gomez', 21, 1, 'A', 24678, 'Pamplona', 'Navarra'), new mail_1.Mail('Personal', 'carla_perez@gmail.com'), new telefono_1.Telefono('Personal', 671691862), 'De mayor quiero ser tiktoker'));
// Mostramos el registro de las tres personas anteriores con un console.log:
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
// Modificación de un registro buscándolo por DNI:
var persona = personas.filter(function (p) { return p.dni == '72635491K'; })[0];
var nuevaDireccion = new direccion_1.Direccion('Ernesto Pardo', 15, 3, 'B', 29384, 'Madrid', 'Madrid');
var nuevoEmail = new mail_1.Mail('Personal', 'bajolasombradelolivo@hotmail.com');
var nuevoTelefono = new telefono_1.Telefono('Empresa', 672634521);
// Sacamos los datos ahora mismo almacenados y añadimos los nuevos:
persona.mails.pop();
persona.mails.push(nuevoEmail);
persona.direcciones.pop();
persona.direcciones.push(nuevaDireccion);
persona.telefonos.pop();
persona.telefonos.push(nuevoTelefono);
// Volvemos a imprimir por consola el cambio:
console.log(persona);
