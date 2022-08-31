import ContactView from "components/contact/ContactView";
import TimelineView from "components/experiences/TimelineView";
import { useRoutes, RouteObject } from "react-router-dom";

export type RouteDescription = RouteObject & {
    label: string;
}

const createRouteDescription = (label: string, urlSegment: string, element: JSX.Element): RouteDescription => ({
    label: label,
    path: urlSegment,
    element: element
});

export const mainRoute = createRouteDescription('Main', '/', <TimelineView />);

export const routeDescriptions: RouteDescription[] = [
    mainRoute,
    createRouteDescription('EXPERIENCES', 'experiences', <TimelineView />),
    createRouteDescription('CONTACT', 'contact', <ContactView />),
    createRouteDescription('LIFESTYLE', 'lifestyle', <ContactView />)
];

export default function Routes() {
    const element = useRoutes(routeDescriptions);
    return element;
}