import { redirect, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import ContactItem from "../components/ContactItem";

function ContactPage() {
    const data = useRouteLoaderData('contact-detail');

    return (
       <ContactItem contact={data?.contact} />
    )
}

export default ContactPage;
export async function loader({ request, params}) {
    const id = params.contactId;
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/contacts/` + id);
        return response.data;  
    } catch (error) {
        throw new  Response(JSON.stringify({ message: 'Faile to get contacts'}), { status: 500});
    }
    
}

export async function action({params, request}) {
    const contactId = params.contactId;
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/` + contactId, {
            method: request.method
        });
        console.log(response);
    } catch (error) {
        throw new  Response(JSON.stringify({ message: error.message}), { status: error.status}); 
    }
   
    
    return redirect('/contacts');
}
