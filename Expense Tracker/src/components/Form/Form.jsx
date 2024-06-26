import React, { useState } from 'react'
import styles from './Form.module.scss';

function Form() {
    var [a,b]=useState(0)
  return (
<div>
<h2 style={{textAlign:'center'}}>
            form validation
          </h2>
    <div style={{display:'flex',justifyContent:'center'}}>
            <div className={styles.formCard}>
              
          
              <form className={styles.expenseForm} action="" >
        
                <input type="text" name="Title" id="Title" placeholder='Title' required='true' />
                <textarea name="Description" id="Description" placeholder='Description' required='true'  rows={2}></textarea>
        
                <input type="number" name="Price" id="Price" placeholder='Price' required='true'/>
                <h1>{a}</h1>
                <button onClick={()=>b(a+1)}>click</button>
              </form>

        
            </div>
    </div>
</div>

  )
}


export default Form
