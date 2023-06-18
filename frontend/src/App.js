
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';
import ContactPage from './pages/ContactDetail';
import NewContactPage from './pages/NewContact';
import EditContactPage from './pages/EditContact';
import RootLayout from './pages/Root';
import ContactsRootLayout from './pages/ContactsRoot';

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    children:[
      { index: true, element: <HomePage />},
      {
        path: '/contacts',
        element: <ContactsRootLayout />,
        children: [
          { index: true , element: <ContactsPage />},
          { path: ':contactId', element: <ContactPage />},
          { path: 'new', element: <NewContactPage />},
          { path: ':contactId/edit', element: <EditContactPage />}
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
