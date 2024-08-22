import { useFavoriteContext } from "../../components/Context/Favorites";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image="favorites" />

      <Title>
        <h1>Meus Favoritos</h1>
      </Title>

      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favorites;
