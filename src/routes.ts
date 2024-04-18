import { dAppName } from 'config';
import { RouteType } from 'types';
import { withPageTitle } from './components/PageTitle';
import { Home } from './pages';

export const routeNames = {
  home: '/',
  unlock: '/unlock',
  activity: '/activity',
};

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
];

export const mappedRoutes = routes.map((route) => {
  const title = dAppName;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});
