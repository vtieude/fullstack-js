import { Link } from 'react-router-dom';
import classes from './ContactsList.module.css';

function ContactsList({ contacts }) {
  return (
    <div className={classes.contacts}>
      <h1>All contacts</h1>
      <ul className={classes.list}>
        {contacts.map((contact, index) => (
          <li key={index} className={classes.item}>
            <Link to={contact._id}>
              {/* <img src={contact.image} alt={contact.name} /> */}
              <div className={classes.content}>
                <h2>{contact.name}</h2>
              </div>
              <div >
                <h3>{contact.phone}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
