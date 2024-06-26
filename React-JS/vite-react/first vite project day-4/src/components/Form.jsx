import React from 'react'

function Form() {
  return (
    <div>
        <div style={{height:'100px'}}></div>
      <h2 style={{textAlign:'center'}}>
        form validation
      </h2>
      <form action="">
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <input type="password" placeholder="enter your password" />
        <input type="submit" value="submit" />
      </form>

    </div>

  )
}


export default Form
