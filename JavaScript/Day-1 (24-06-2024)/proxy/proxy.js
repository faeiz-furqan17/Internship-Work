let fontsize ={
    small: "small",
    tiny: "tiny"
}
let handler = {
    get: function(fontsize,property){
        console.log(`${property} has been acessed`)
        return fontsize[property]
    }
}
let proxy = new Proxy( fontsize,handler)

console.log(proxy.small)