import { Link } from 'react-router-dom';
import classes from './ContactsList.module.css';

function ContactsList({ contacts }) {
  return (
    <div className={classes.contacts}>
      <h1>All contacts</h1>
      <ul className={classes.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={classes.item}>
            <Link to={contact.id}>
              {/* <img src={contact.image} alt={contact.title} /> */}
              <div className={classes.content}>
                <h2>{contact.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
