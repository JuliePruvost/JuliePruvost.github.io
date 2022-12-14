import Nav from "react-bootstrap/esm/Nav";
import { NavLink } from "react-router-dom";
import { mainRoute, routeDescriptions } from "./Routes";
import {ReactComponent as MainNavItemSvg} from './components/MainNavItem.svg';
import './NavigationBar.scss';
import { Container, Navbar } from "react-bootstrap";
import { useState } from "react";

const MainNavigationItem = () => {
    return (
        <Nav.Item>
            <Nav.Link as={NavLink} to={routeDescriptions[0].path!} className="main-nav-item">
                <MainNavItemSvg />
            </Nav.Link>
        </Nav.Item>
    );
}

export default function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const onToggleClick = () => {
        setExpanded(expanded ? false : true);
    };

    const onItemClick = () => {
        setExpanded(false);
    };

    const navigationItems = routeDescriptions
        .filter(routeDescription => routeDescription.path && routeDescription !== mainRoute)
        .map((routeDescription, index) => {
            return (
                <Nav.Item key={index} className="common-nav-item">
                    <Nav.Link as={NavLink} onClick={onItemClick} to={routeDescription.path!}>{routeDescription.label}</Nav.Link>
                </Nav.Item>
            );
        });

    return (
        <Container>
            <Navbar expand="sm" expanded={expanded}>
                <Container>
                    <MainNavigationItem />
                    <Navbar.Toggle onClick={onToggleClick} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse key='collapseableNavBar' id="responsive-navbar-nav">
                        <Nav className="me-auto" 
                            activeKey="/"
                            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            {navigationItems}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}