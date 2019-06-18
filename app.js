const { crearArchivo, listarNumero } = require("./multiplicar/multiplicar")
const { argv } = require("./config/yars")
var colors = require('colors');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarNumero(argv.base, argv.limite).then((result) => {
            console.log(colors.green(result));
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Creado el archivo ${archivo}`);
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        break;
}