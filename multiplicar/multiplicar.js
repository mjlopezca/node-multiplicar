const fs = require('fs');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('No es un numero');
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} =${base * i} \r\n`;

        }
        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base}.txt`);
        });
    })

}
let listarNumero = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || !Number(limite)) {
            reject('No es un numero');
        }


        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} =${base * i} \r\n`;

        }
        resolve(data);
    })

}
module.exports = {
    crearArchivo,
    listarNumero
}