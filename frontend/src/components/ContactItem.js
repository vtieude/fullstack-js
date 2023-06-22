import { Link, useSubmit } from 'react-router-dom';
import classes from './ContactItem.module.css';

function ContactItem({ contact }) {
 
  const submit = useSubmit();
  if(!contact) {
    return <p>Contact Invalid</p>;
  }
  function startDeleteHandler() {
    const confirmProcess = window.confirm('Confirm delete?');
    if (confirmProcess) {
      submit(null, {method: 'delete'});
    }
  }

  return (
    <article className={classes.contact}>
      <img src={contact.image} alt={contact._id} />
      <h1>Name: {contact.name}</h1>
      <h3>Email: {contact.email}</h3>
      <h3>PhoneNumber: {contact.phone}</h3>
      <time className={!!contact.date ? '' : classes.hidden}>BirthDate: {contact.date}</time>
      <p className={!!contact.description ? '' : classes.hidden}>Note: {contact.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default ContactItem;
