// function a(){
//     newFunction();

//     function newFunction() {
//         newFunction_1();

//         function newFunction_1() {
//             console.log(b);
//         }
//     }
// };
//newFunction_1 is lexical to newFunction which is lexical to a function

// var b = 10
// a();


function x() {
console.log(a);
    y();

    function y() {
    //   var a = 10
    }
}

var a = 10;
x();
// console.log(a);