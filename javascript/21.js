// intro to for loop
// print 0 to 9

// for(let i = 0; i <=9;i++){
//     console.log(i);
// } 
// // console.log(i); /---------------let kay case may console bahar exit nhu karega hamesa and he hogi---------/

//but

// for(var i = 0; i <=9;i++){
//     console.log(i);
// }
// console.log("value of i is ",i);

//var kay case may ye loop kay bahar exit karega

// let i = 0;
// for(; i <=9;i++){
//     console.log(i);
// }
// console.log("value of 1 is",i);

// let kay  case may i ko bahar declare karega jab kamm karega  ab bahar exit karega



// -------------------for loop example--------------------------//

let total = 0;

let num = 100;

for(let i =1; i<=num;i++){
    total = total+1;
}

console.log(total);