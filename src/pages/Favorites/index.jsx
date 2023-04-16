import React from 'react'

import { useFavoriteContext } from 'contexts/Favorite';

import Banner from 'componentes/Banner';
import Title from 'componentes/Title';
import CardList from 'componentes/CardList';

export default function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner imagem="favoritos"/>
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section>
        <CardList videos={favorites}/>
      </section>
    </>
  )
}
