import { json, redirect, useRouteLoaderData } from "react-router-dom";
import axiosInstance from "../axiosInstance";
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
        const response = await axiosInstance.get(`http://localhost:8080/contacts/` + id);
        return response.data;  
    } catch (error) {
        throw json(error);
    }
    
}

export async function action({params, request}) {
    const contactId = params.contactId;
    try {
        const response = await axiosInstance.delete(`http://localhost:8080/contacts/` + contactId);
        console.log('delete', response);
    } catch (error) {
        console.log('error when delete contact', error);
        throw json(error.response); 
    }
   
    
    return redirect('/contacts');
}
