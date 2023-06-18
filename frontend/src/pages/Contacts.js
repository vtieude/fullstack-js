import ContactsList from "../components/ContactsList";

function ContactsPage() {
    const contactList = [{
        id: "e1",
        title: "Test 1"
    }, {
        id: "e2",
        title: "Test 2"
    }]
    return (
        <ContactsList contacts={contactList} />
    )
}

export default ContactsPage;