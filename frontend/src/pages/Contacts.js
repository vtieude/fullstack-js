import ContactsList from "../components/ContactsList";
import axios from "axios";
import { useLoaderData} from 'react-router-dom';
function ContactsPage() {
    const contacts = useLoaderData();
    return (
       <ContactsList contacts={contacts} />
    )
}

export default ContactsPage;

export async function loader() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/contacts`);
        const resData = await response.data;
        return resData.contacts;
    } catch (error) {
        throw new  Response(JSON.stringify({ message: 'Faile to get contacts'}), { status: 500});
    }
}
