import {useContext} from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import FavoritesContext from '../store/Favorite-context';

const NavBar = () => {
  const favoritesCtx = useContext(FavoritesContext);
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
            <Link to="/favorites">Favorites <span className={styles.badge}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
