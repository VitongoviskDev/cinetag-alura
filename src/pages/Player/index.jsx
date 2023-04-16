import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

import Banner from 'componentes/Banner';
import Title from 'componentes/Title';

import styles from './Player.module.css';
import NotFound from 'pages/NotFound';

export default function Player() {
    const pageParameters = useParams();
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/VitongoviskDev/cinetag-api/videos?id=${pageParameters.id}`)
        .then(reponse => reponse.json())
        .then(data => {
            setVideo(...data);
        })
    }, [pageParameters]);


    

    if(!video){
        return <NotFound />
    }
    return (
        <>
            <Banner imagem="player"/>
            <Title>
                <h1>Video Player</h1>
            </Title>
            
            <section>
                <iframe 
                    className={styles.video}
                    width="100%"  
                    src={video.link} 
                    title={video.title}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>

                </iframe>
            </section>            
        </>
    )
}
