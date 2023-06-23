import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({isActive}) => isActive ? classes.active : undefined}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/auth?mode=login" className={({isActive}) => isActive ? classes.active : undefined}>Authentication</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
