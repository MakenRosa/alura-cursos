import Banner from "components/Banner";
import styles from "./Favorites.module.css"
import Title from "components/Title";
import Card from "components/Card";
import { useFavoritesContext } from "contexts/Favorites";

function Favorites() {
    const { favorites } = useFavoritesContext();
    return (
        <>
            <Banner image="favorites" />
            <Title>
                <h1>My favorites</h1>
            </Title>
            <section className={styles.container}>
                {favorites.map((favorite) => {
                    console.log(favorite);
                    return <Card key={favorite.id} isFavorite={true} capa={favorite.cover} titulo={favorite.title} id={favorite.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;