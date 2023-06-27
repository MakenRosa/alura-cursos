import { useFavoritesContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo: title, capa: cover, isFavorite }) => {
    const {addFavorite} = useFavoritesContext();
    const icon = isFavorite ? unfavoriteIcon : favoriteIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cover} alt={title} className={styles.cover} />
                <h2>{title}</h2>
            </Link>
            <img src={icon} alt="Favorite" className={styles.favorite} onClick={() => {
                addFavorite({ id, title, cover });
            }} />
        </div>

    )
}

export default Card;