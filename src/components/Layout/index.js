import React from 'react';
import LayoutBody from './LayoutBody';
import PastChequeListContainer from './PastChequeListContainer';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  console.log('layout');
  return (
    <div style={{ display: 'flex', padding: '5px' }}>
      <SideNav />
      <LayoutBody>{children}</LayoutBody>
      <PastChequeListContainer />
    </div>
  );
};

export default Layout;
