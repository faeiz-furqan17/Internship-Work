import React from 'react'

import styles from './Navbar.module.scss';


function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4-xjZQP_eKyqr_bXBBoqGfKsmVNdYS8mcw&s" />
        </div>
        <div className={styles.links}>
          <ul >
           <li><a href="">form</a></li>
           <li><a href="">list</a></li>
           <li><a href="">summary</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
