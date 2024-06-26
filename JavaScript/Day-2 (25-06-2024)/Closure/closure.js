function x(){
    var a = 7;
    y();

    function y() {
        console.log(a);
    }
}
x();
// that is how closures works an inner method lexical to its paremts trying to access the  variables that   are defined in the  parent function

//now we want to see that how we can return a function remove the parents and still get left with the lexical state of our returned function
function a1() {
    var b = 7;
    return function() {
        console.log(b);
    }
    b = 100 // in closures if we return the function before changing the variables inside it then the variable will retain the original value but if he had changed it befor returning it even after the body of function the  value will be updated
}
z = a1();
console.log(z);
z();