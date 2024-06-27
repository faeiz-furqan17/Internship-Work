import React from 'react'

function User() {
    function returnUser(user) {
        return user.name;
  
    }
    const user = {
        id: 1,
        name: 'John',
        age: 30,
        address: {
          street: '50 main st',
          city: 'New York',
          state: 'NY',
        },
      };
    
    
  return (
    <div>
      <h1> hello {returnUser(user)}</h1>
    </div>
  )
}

export default User
