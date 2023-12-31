import ContactsList from "../components/ContactsList";
import axiosInstance from "../axiosInstance";
import { json, useLoaderData} from 'react-router-dom';
function ContactsPage() {
    const contacts = useLoaderData();
    return (
       <ContactsList contacts={contacts} />
    )
}

export default ContactsPage;

export async function loader() {
    try {
        const response = await axiosInstance.get(`http://localhost:8080/contacts`);
        const resData = await response.data;
        return resData.contacts;
    } catch (error) {
        console.log('error uccure', error);
        throw json(error);
    }
}
