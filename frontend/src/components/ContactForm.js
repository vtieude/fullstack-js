import { useNavigate, Form, useNavigation } from 'react-router-dom';
import axios from "axios";
import { redirect } from 'react-router-dom';


import classes from './ContactForm.module.css';

function ContactForm({ method, contact }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmit = navigation.state === 'submitting';
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" defaultValue={contact?.name} required />
      </p>
      <p>
        <label htmlFor="phone">PhoneNumber</label>
        <input id="phone" type="number" name="phone" defaultValue={contact?.phone} required />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" defaultValue={contact?.phone} required />
      </p>
      <p>
        <label htmlFor="image">ImageUrl</label>
        <input id="image" type="url" name="image" defaultValue={contact?.image} />
      </p>
      <p>
        <label htmlFor="date">BirthDate</label>
        <input id="date" type="date" name="date" defaultValue={contact?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={contact?.description} required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmit}>
          Cancel
        </button>
        <button disabled={isSubmit}>{isSubmit ? 'Submitting' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default ContactForm;

export async function action({request, params}) {
  const method = request.method;
  const data = await request.formData();
  const contactData = {
      name: data.get('name'),
      image: data.get('image'),
      date: data.get('date'),
      phone: data.get('phone'),
      email: data.get('email'),
      description: data.get('description')
  }
  try {
    if (method === "POST") {
      await axios.post(`http://localhost:8080/contacts`, {
        contactData
      })
    } else {
      const contactId = params.contactId;
       await axios.patch(`http://localhost:8080/contacts/` + contactId, {
        contactData
      })
    }
  } catch (error) {
    throw new  Response(JSON.stringify({ message: error.message}), { status: error.status}); 
  }
  

  return redirect('/contacts');
}

