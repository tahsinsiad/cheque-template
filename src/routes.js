import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import PrintReadyCheque from './components/PrintCheque/PrintReadyCheque';

export const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Nav 1!</div>,
    main: () => <Nav1 />,
  },
  {
    path: '/print',
    sidebar: () => <div>Nav 2</div>,
    main: () => <Nav2 />,
  },
  {
    path: '/history',
    sidebar: () => <div>History</div>,
    main: () => <PrintReadyCheque />,
  },
];
