import { NavLink } from 'react-router-dom';
import classes from './ContactsNavigation.module.css';

function ContactsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/contacts"
              className={({isActive}) => isActive ? classes.active : undefined} end>
              All contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts/new" className={({isActive}) => isActive ? classes.active : undefined}>New contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ContactsNavigation;
