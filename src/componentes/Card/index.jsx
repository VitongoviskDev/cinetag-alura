import React from 'react'

import styles from './Card.module.css';

import toFavoriteIcon from 'assets/images/favorite_outline.png';
import toDisfavorIcon from 'assets/images/favorite.png';


import { useFavoriteContext } from 'contexts/Favorite';
import { Link } from 'react-router-dom';

export default function Card({id, title, thumbnail}) {

  const {favorites, ToggleFavorite} = useFavoriteContext();

  const favorite = favorites.find(favorite => favorite.id === id);

  return (
    <div className={styles.cardContainer}>
        <Link className={styles.link} to={`/player/${id}`}>
          <img 
              src={thumbnail} 
              alt={title}
              className={styles.thumbnail} />
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <img 
            onClick={() => {
              ToggleFavorite({id, title, thumbnail})
            }}
            src={ favorite ? toDisfavorIcon : toFavoriteIcon} 
            alt="Favoritar filme"
            className={styles.favorite}/>
    </div>
  )
}
