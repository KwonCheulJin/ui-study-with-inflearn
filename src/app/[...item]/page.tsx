import { isParentRoute, ROUTE_PATH, routePaths, routes } from '@/routes';

interface Props {
  params: { item: string[] };
}
export default function ItemPage({ params: { item } }: Props) {
  const path = ['', ...item].join('/') as ROUTE_PATH;
  const route = routes[path];

  if (!routePaths.includes(path) || isParentRoute(route) || !route.children)
    return null;

  const Component = route.children;
  return (
    <section className="p-20">
      <Component />
    </section>
  );
}
