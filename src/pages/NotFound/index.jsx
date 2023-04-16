import React from 'react'

import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.containers}>
        <h2>Ops!</h2>
        <p>O Conteúdo que você procura não foi encontrado</p>
    </section>
  )
}
