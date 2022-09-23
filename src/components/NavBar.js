import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My pages</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
