import React from 'react'
import shoppingCart from "../../../public/shared/desktop/icon-cart.svg"
import styles from '../styles/components/navbar.module.css'
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

        <h1 className={styles.title}>audiophile</h1>
        <ul className={styles.navLinks}>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
        </ul>
        <button aria-label="Shopping Cart" className={styles.shoppingCartButton}><Image src={shoppingCart} className={styles.shoppingCart} alt='Shopping Cart' width={30} height={30}/></button>

    </nav>
  )
}

export default Navbar