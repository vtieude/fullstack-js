import { Link, useSubmit } from 'react-router-dom';
import classes from './ContactItem.module.css';

function ContactItem({ contact }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const confirmProcess = window.confirm('Confirm delete?');
    if (confirmProcess) {
      submit(null, {method: 'delete'});
    }
  }

  return (
    <article className={classes.contact}>
      <img src={contact.image} alt={contact.name} />
      <h1>ContactName: {contact.name}</h1>
      <time>BirthDate: {contact.date}</time>
      <p>Note: {contact.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default ContactItem;
