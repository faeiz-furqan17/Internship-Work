import React from 'react'

import styles from './Navbar.module.scss';


function Navbar() {
  return (
    <div>
<header>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4-xjZQP_eKyqr_bXBBoqGfKsmVNdYS8mcw&s" />
          </div>
          <div className={styles.links}>
            <ul >
             <li><button>
              <a href="">Add</a>
             </button></li>
             
             <li><button>
              <a href="">Dashboard</a>
             </button></li>
            </ul>
          </div>
        </div>
</header>
    </div>
  )
}

export default Navbar
