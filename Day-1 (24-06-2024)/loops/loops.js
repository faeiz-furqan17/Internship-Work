for (i = 0;i<3;i++){
    console.log("i am for loop")
}//for loop simple

person={
    1:{
        name: "faeiz",
        age:22
    },
    2:{
        name:"furqan",
        age: 48
        
    }
}//persoon object

for(x in person){
    console.log(person[x])
}// for in loop to iterate over objects and arrays 

const number = [100,200,300,400,]

var total,quantity=0

fn = (value,index)=>{
    console.log(value)
    total += value 
    quantity = index+1
    return total,quantity

}
number.forEach(fn)//for each
console.log(total,quantity)


//for of loop as well 
var i = 0
while(i<10){
console.log("i am in while loop")
i++
}
//break to jump out at a certain condition 
//continue to skip one condition 


