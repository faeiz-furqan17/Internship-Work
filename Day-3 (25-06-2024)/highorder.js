radius=[5,2,67,9]

function area (radius) {
 return Math.PI * radius *radius
}


function calculateAnythings (logic,radius) {
    output=[]
    for(x in radius) {
        output.push(logic(radius[x]))
    }
    console.log(output)
}
calculateAnythings(area,radius)