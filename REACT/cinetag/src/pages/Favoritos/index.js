import Banner from "components/Banner";
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritosContext } from "contexts/Favoritos";

function Favoritos() {
    const { favoritos } = useFavoritosContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favoritos.map((favorito) => {
                    return <Card {...favorito} key={favorito.id} isFavorito={true} />
                })}
            </section>
        </>
    )
}

export default Favoritos;