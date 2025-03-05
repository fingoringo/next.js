import styles from './styles/home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome</h1>
            <p>okok</p>
            <a href="/about">A propos</a>
        </div>
        
    );
}

