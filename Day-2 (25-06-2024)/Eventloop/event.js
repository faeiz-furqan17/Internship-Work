//synchronuous nature of js
console.log("first")
console.log("second")
console.log("third")

//asynchronuous nature of js
console.log("callback function")
console.log("first")
setTimeout(function(){
    console.log("second")
},1000)
console.log("third")

