import { Outlet } from "react-router-dom";
import { ResponsiveNavBar } from '../ui-components';

function Layout({onSignOut}) {
    return (
        <>
            <ResponsiveNavBar onSignOutClick={onSignOut}/>
            <Outlet />
            <div className="page-footer">
                <a class="page-footer-contact" href="mailto:contact@saintolivetree.com">Copyright © 2023 Saint Olive Tree</a>
            </div>
        </>
    );
}
export default Layout;