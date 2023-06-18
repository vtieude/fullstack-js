import classes from './ContactItem.module.css';

function ContactItem({ contact }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.contact}>
      <img src={contact.image} alt={contact.title} />
      <h1>{contact.title}</h1>
      <time>{contact.date}</time>
      <p>{contact.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default ContactItem;
