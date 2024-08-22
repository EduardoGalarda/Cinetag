import styles from "./Card.module.css";
import favoriteIcon from "../../assets/images/favorite.png";
import unfavoriteIcon from "../../assets/images/unfavorite.png"
import { useFavoriteContext } from "../../components/Context/Favorites";
import { Link } from "react-router-dom";


const Card = ({ id, title, poster }) => {

  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id)
  const icon = isFavorite ? unfavoriteIcon : favoriteIcon
 
 

  return (

    <div className={styles.container}>

      <Link className={styles.link} to={`/${id}`}>

        <img src={poster} alt={title} className={styles.poster} />

        <h2>{title}</h2>

      </Link>

      <img src={icon} alt="Favorite movie" className={styles.favorite}
            onClick={() => {
              addFavorite({ id, title, poster })}}/>

    </div>

  );
};

export default Card;
