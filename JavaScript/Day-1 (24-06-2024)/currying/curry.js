function add(a,b,c){
    return a + b + c
}

console.log(add(2,2,2))
console.log(add(2,2))

//now lets convert it into curry  so it doesnt accept values less than 3 
// function addWithCurry(a){
//     return function  (b){
//         return function (c){
//             return a+b+c
//         }
//     } 
// }
const addWithCurry =(a)=>(b)=>(c)=> a+b+c
console.log(addWithCurry(2)(2)(2))

console.log(addWithCurry(2)(2))