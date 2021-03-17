//1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։
const random = require('random');

function randomNumbers(){
    return new Promise(function(resolve,reject) {
        let num = random.int(0,10);
        if(num < 5){
            reject();
        }
        resolve(num);
    });
}
for(let i = 0; i < 10; i++)
{
    randomNumbers().then(function (num) {
        console.log(num);
    }).catch(function () {
        console.log("That number cannot be generated.");
    });
}