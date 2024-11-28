import Accordions from '@/components/accordion';

export const routePaths = ['/', '/accordions'] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

interface BaseRoute {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
}

export interface ParentRoute extends BaseRoute {
  children: ROUTE_PATH[];
}

export interface ChildRoute extends BaseRoute {
  children: ((props: unknown) => JSX.Element) | null;
}

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: ['/accordions'],
  },
  '/accordions': {
    key: '/accordions',
    link: '/accordions',
    name: 'Accordion',
    children: Accordions,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map(
  r => routes[r]
);
