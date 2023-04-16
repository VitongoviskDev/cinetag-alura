import React, { useEffect, useState } from 'react'

import Banner from 'componentes/Banner'
import Title from 'componentes/Title'
import CardList from 'componentes/CardList'

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/VitongoviskDev/cinetag-api/videos');
      const data = await response.json();
      setVideos(data);
    }

    fetchData();
  }, []);
   
  return (

    <>
      <Banner imagem="home"/>
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section>
        <CardList videos={videos}/>
      </section>
    </>
  )
}
 