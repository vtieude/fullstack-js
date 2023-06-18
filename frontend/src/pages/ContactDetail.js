import { useParams } from "react-router-dom";

function ContactPage() {
    const params = useParams()

    return (
        <>
            <h1>Contact Detail Page</h1>
            <p>Contact Id: {params.contactId}</p>
        </>
    )
}

export default ContactPage;