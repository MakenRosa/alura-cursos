import { useFavoritosContext } from 'contexts/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa, isFavorito }) => {
    const {adicionarFavorito} = useFavoritosContext();
    const icon = isFavorito ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt="Favoritar" className={styles.favoritar} onClick={() => {
                adicionarFavorito({id, titulo, capa});
                
            }} />
        </div>

    )
}

export default Card;