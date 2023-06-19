import ContactForm from '../components/ContactForm';
import {useRouteLoaderData} from 'react-router-dom';
function EditContactPage() {
    const data = useRouteLoaderData('contact-detail');
    return <ContactForm method="patch" contact={data.contact}/>;
}

export default EditContactPage;
