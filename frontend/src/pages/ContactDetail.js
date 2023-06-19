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
        const response = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/contacts/` + id);
        return response.data;  
    } catch (error) {
        throw json(error);
    }
    
}

export async function action({params, request}) {
    const contactId = params.contactId;
    try {
        const response = await axiosInstance.delete(`${process.env.REACT_APP_BASE_URL}/contacts/` + contactId, {
            method: request.method
        });
        console.log(response);
    } catch (error) {
        throw json(error); 
    }
   
    
    return redirect('/contacts');
}
