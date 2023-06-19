
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/Home';
import ContactsPage,  {loader as contactsLoader} from './pages/Contacts';
import ContactPage, {action, loader as contactDetailLoader, action as deleteContactAction} from './pages/ContactDetail';
import NewContactPage from './pages/NewContact';
import EditContactPage from './pages/EditContact';
import RootLayout from './pages/Root';
import ContactsRootLayout from './pages/ContactsRoot';
import ErrorPage from './pages/Errors';
import {action as contactEventAction} from './components/ContactForm';

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { index: true, element: <HomePage />},
      {
        path: '/contacts',
        element: <ContactsRootLayout />,
        children: [
          { index: true , element: <ContactsPage />, loader: contactsLoader},
          { path: ':contactId',
            loader:  contactDetailLoader,
            id: 'contact-detail',
            children: [
              { index: true, element: <ContactPage />, action: deleteContactAction},
              { path: 'edit', element: <EditContactPage />, action: contactEventAction}
            ]
          },
          { path: 'new', element: <NewContactPage />, action: contactEventAction },
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
