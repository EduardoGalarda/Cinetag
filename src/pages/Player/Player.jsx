
import styles from "./Player.module.css";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {

    const [video, setVideo] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/EduardoGalarda/cinetag-api/videos?id=${params.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        }, [])

    })


    if (!video) {
        return <NotFound />
    }

  return (
    <>
    <Banner image="player" />
    <Title>
        <h1>Player</h1>
    </Title>

    <section className={styles.container}>
        <iframe 
            width="100%" 
            height="100%"  
            src={video.link}
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </section>

    </>
  );
};

export default Player;