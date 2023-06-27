import styles from './NotFound.module.css';

function NotFound () {
    return (
        <section className={styles.container}>
            <h1>404</h1>
            <h2>Ops!</h2>
            <p>Page Not Found</p>
        </section>
    )
}

export default NotFound;