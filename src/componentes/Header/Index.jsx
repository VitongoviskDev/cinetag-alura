import React from 'react'
//Hooks 
//Components
import { Link } from 'react-router-dom';
//CSS
import styles from './Header.module.css';
// Images
import logo from 'assets/images/logo.png'
import HeaderLink from 'componentes/HeaderLink/Index';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logo} alt="logo da cine tag" />
        </Link>
        <nav className={styles.header__nav}>
            <HeaderLink url="/">
                Home
            </HeaderLink>
            <HeaderLink url="/favorites">
                Favoritos
            </HeaderLink>
        </nav>
    </header>
  )
}
