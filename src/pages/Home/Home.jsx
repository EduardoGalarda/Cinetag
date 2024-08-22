import Title from "../../components/Title/Title.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
// import videos from "../../json/db.json"
import styles from "./Home.module.css"
import { useEffect, useState } from "react";

const Home = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/EduardoGalarda/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>


      <Banner image="home" />

      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Title>

     <section className={styles.container}>
      {videos.map((video) => {
        return <Card {...video} key={video.id} />
      })}
     </section>

    </>
  );
};

export default Home;
