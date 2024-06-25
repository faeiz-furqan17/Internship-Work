function add(a,b){
    return new Promise((resolve,reject  )=>{
        if(typeof a === 'number' && typeof b === 'number'){
           return resolve(a+b)
        }else{
          return  reject('not a number')
          }  })
    }

    add(2, 2)
    .then(result => {
        console.log('Result:', result); // Output: Result: 4
    })
    .catch(error => {
        console.error('Error:', error);
    });