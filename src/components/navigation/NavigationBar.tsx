import Nav from "react-bootstrap/esm/Nav";
import { NavLink } from "react-router-dom";
import { mainRoute, routeDescriptions } from "./Routes";
import {ReactComponent as MainNavItemSvg} from './components/MainNavItem.svg';
import './NavigationBar.scss';

const navigationItems = routeDescriptions.map((routeDescription, index) => {
    if (!routeDescription.path) {
        return <></>;
    }

    if (routeDescription === mainRoute) {
        return (
            <Nav.Item key={index}>
                <Nav.Link as={NavLink} to={routeDescription.path} className="main-nav-item">
                    <MainNavItemSvg />
                </Nav.Link>
            </Nav.Item>
        )
    }

    return (
        <Nav.Item key={index} className="common-nav-item">
            <Nav.Link as={NavLink} to={routeDescription.path}>{routeDescription.label}</Nav.Link>
        </Nav.Item>
    );
});

export default function NavigationBar() {
    return (
        <Nav
            activeKey="/"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {navigationItems}
        </Nav>
    );
}