import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';

export const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Nav 1!</div>,
    main: () => <Nav1 />,
  },
  {
    path: '/nav2',
    sidebar: () => <div>Nav 2</div>,
    main: () => <Nav2 />,
  },
  {
    path: '/nav3',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];
