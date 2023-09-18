//cargar nuevas comidas al menu
let cadena = "bienvenido al nuevo sistema para cargar nuevas comidas";
console.log(cadena.length);

const listapedidos = [];
while (true) {
    const elegiritem = prompt('Ingrese un comando: "agregar nuevo item", "eliminar", "buscar en la lista" , "salir".');

    if (elegiritem == "salir") {
        break;
    }

    switch (elegiritem) {
        case "agregar nuevo item":

            const nombre = prompt('Ingrese el nuevo item:');
            const numero = prompt('Ingrese el precio del nuevo item:');


            listapedidos.push({ nombre, numero });
            //alert(`Nombre: ${elegiritem.nombre}, su numero de telefono es:${elegiritem.numero}`);
            alert('NUEVO ITEM AGREGADO!!');
            break;

        case "eliminar":

            const eliminarContacto = prompt('ingrese el item a eliminar');
            const eliminar = listapedidos.findIndex(nombre => nombre.nombre === eliminarContacto);

            if (eliminar !== -1) {
                listapedidos.splice(eliminar, 1);
                alert('ITEM ELIMINADO CON EXITO!!');
            } else {
                alert('la comida ya no existe en el listado');
            }
            break;

        case "buscar en la lista":

            const buscarNombre = prompt('Ingresa el nombre del contacto que quieres buscar');
            const contactoEncontrado = listapedidos.find(nombre => nombre.nombre === buscarNombre);

            if (contactoEncontrado) {
                alert(`Nombre del item elegido: ${contactoEncontrado.nombre}, precio:${contactoEncontrado.numero}`);
            } else {
                alert('El item que etas buscando no fue encontrado');
            }
            break;

        default:
            alert('Comando no conocido. Por favor ingrese un comando valido.');
    }
}