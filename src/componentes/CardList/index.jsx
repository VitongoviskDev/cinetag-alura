import React from 'react'

import styles from './CardList.module.css';
import Card from 'componentes/Card';

export default function CardList({videos}) {
  return (
    <section className={styles.videosContainer}>
    {
        videos.map(video => {
        return(
            <Card {...video} key={video.id} />
        )
        })
    }
    </section>
  )
}
