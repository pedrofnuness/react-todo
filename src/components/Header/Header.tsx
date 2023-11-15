import styles from './Header.module.css';
import rocketLogo from '/rocket.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="rocket logo" />
      <h1 className={styles.blueText}>to</h1>
      <h1 className={styles.purpleText}>do</h1>
    </header>
  )
}