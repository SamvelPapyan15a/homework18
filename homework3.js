//3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fsPromises = require('fs/promises');
async function start(){
    const data = await fsPromises.readFile('./input.txt');
    await Promise.all([
        fsPromises.writeFile('./output1.txt',data.toString().slice(0,data.length/2)),
        fsPromises.writeFile('./output2.txt',data.toString().slice(data.length/2))
    ]);
}

start();