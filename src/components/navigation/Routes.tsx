import ContactView from "components/contact/ContactView";
import ExperiencesView from "components/experiences/ExperiencesView";
import LifestyleView from "components/lifestyle/LifestyleView";
import MainView from "components/main/MainView";
import { useRoutes, RouteObject } from "react-router-dom";

export type RouteDescription = RouteObject & {
    label: string;
}

const createRouteDescription = (label: string, urlSegment: string, element: JSX.Element): RouteDescription => ({
    label: label,
    path: urlSegment,
    element: element
});

export const mainRoute = createRouteDescription('Main', '/', <MainView />);

export const routeDescriptions: RouteDescription[] = [
    mainRoute,
    createRouteDescription('EXPERIENCES', 'experiences', <ExperiencesView />),
    createRouteDescription('LIFESTYLE', 'lifestyle', <LifestyleView />),
    createRouteDescription('CONTACT', 'contact', <ContactView />)

];

export default function Routes() {
    const element = useRoutes(routeDescriptions);
    return element;
}