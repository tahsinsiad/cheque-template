import React from 'react';
import LayoutBody from './LayoutBody';
import PastChequeListContainer from './PastChequeListContainer';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', background: '#24365f4f' }}>
      <SideNav />
      <LayoutBody>{children}</LayoutBody>
      <PastChequeListContainer />
    </div>
  );
};

export default Layout;
