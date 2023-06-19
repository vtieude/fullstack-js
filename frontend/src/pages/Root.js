import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function    RootLayout() {
    return (<>
    <ToastContainer />
     <MainNavigation></MainNavigation>
     <main>
        <Outlet></Outlet>
     </main>
    </>)
}
export default RootLayout;