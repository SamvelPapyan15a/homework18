//3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fsPromises = require('fs/promises');
async function start(){
    const data = await fsPromises.readFile('./input.txt');
    Promise.all([
        fsPromises.writeFile('./output1.txt',data.toString().split("").slice(0,data.length/2).join("")),
        fsPromises.writeFile('./output2.txt',data.toString().split("").slice(data.length/2).join(""))
    ]);
}

start();