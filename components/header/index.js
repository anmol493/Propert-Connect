import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={styles.container}>
        <div>
        <Link href="/">
          <a>Home</a>
        </Link>
            
        </div>
        <div>
        <Link href="/login">
          <a>Login</a>
        </Link>
        /
        <Link href="/register">
          <a>Register</a>
        </Link>
        </div>
    </div>
  )
}

export default Header