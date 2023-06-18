const { Outlet } = require("react-router-dom");
const { default: ContactsNavigation } = require("../components/ContactsNavigation");

function ContactsRootLayout() {
    return (
        <>
            <ContactsNavigation />
            <Outlet />
        </>
    )
}
export default ContactsRootLayout;