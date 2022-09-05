import ContactView from "components/contact/ContactView";
import ExperiencesView from "components/experiences/ExperiencesView";
import LifestyleView from "components/lifestyle/LifestyleView";
import { useRoutes, RouteObject } from "react-router-dom";

export type RouteDescription = RouteObject & {
    label: string;
}

const createRouteDescription = (label: string, urlSegment: string, element: JSX.Element): RouteDescription => ({
    label: label,
    path: urlSegment,
    element: element
});

export const mainRoute = createRouteDescription('Main', '/', <ExperiencesView />);

export const routeDescriptions: RouteDescription[] = [
    mainRoute,
    createRouteDescription('EXPERIENCES', 'experiences', <ExperiencesView />),
    createRouteDescription('CONTACT', 'contact', <ContactView />),
    createRouteDescription('LIFESTYLE', 'lifestyle', <LifestyleView />)
];

export default function Routes() {
    const element = useRoutes(routeDescriptions);
    return element;
}