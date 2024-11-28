'use client';
import {
  gnbRootList,
  isParentRoute,
  ParentRoute,
  ROUTE,
  ROUTE_PATH,
  routes,
} from '@/routes';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CommonProps {
  currentPath: ROUTE_PATH;
}

interface ParentGnpItemProps extends CommonProps {
  route: ParentRoute;
}

function ParentGnbItem({
  route: { key, link, name, children },
  currentPath,
}: ParentGnpItemProps) {
  const calcHeight = children.length * 44;

  return (
    <li className="relative">
      <Link href={link}>
        <div
          className={`relative rounded-4 py-12 px-16 z-20 ${
            currentPath.includes(key)
              ? 'text-white bg-secondary '
              : 'text-gray-500 hover:bg-secondary hover:text-white'
          }`}
        >
          {name}
        </div>
      </Link>
      <ul
        className={`relative pl-8 ease z-10 ${
          currentPath.includes(key)
            ? `translate-y-0 h-${calcHeight} opacity-100 duration-300`
            : `-translate-y-${calcHeight} h-0 opacity-0`
        }`}
      >
        {children.map(r => {
          const route = routes[r];
          return (
            <GnbItem
              key={route.key}
              route={route}
              currentPath={currentPath}
              isChild
            />
          );
        })}
      </ul>
    </li>
  );
}

interface GnpItemProps extends CommonProps {
  route: ROUTE;
  isChild?: boolean;
}

function ChildGnbItem({
  route: { link, name, children },
  currentPath,
  isChild,
}: GnpItemProps) {
  return (
    <li
      className={`w-full rounded-4 ${
        link === currentPath
          ? isChild
            ? 'text-white'
            : 'text-white bg-secondary'
          : 'text-gray-500'
      } ${
        !children
          ? 'cursor-not-allowed hover:bg-primary'
          : isChild
          ? 'hover:bg-primary hover:text-white'
          : 'hover:bg-secondary hover:text-white'
      }`}
    >
      {children ? (
        <Link href={link} className="inline-block py-12 px-16 w-full">
          {name}
        </Link>
      ) : (
        `${name}`
      )}
    </li>
  );
}

function GnbItem({ route, currentPath, isChild }: GnpItemProps) {
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  return (
    <ChildGnbItem route={route} currentPath={currentPath} isChild={isChild} />
  );
}

export default function Gnb() {
  const { item = [] } = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH;
  return (
    <aside className="w-200 px-8 bg-primary h-screen">
      <h1 className="text-24 font-extrabold py-12">
        <Link href="/">UI 요소 모음</Link>
      </h1>
      <ul>
        {gnbRootList.map(route => (
          <GnbItem key={route.key} route={route} currentPath={currentPath} />
        ))}
      </ul>
    </aside>
  );
}
