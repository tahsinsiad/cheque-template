import React from 'react';
import { useLocation } from 'react-router';
import ChequeList from '../Cheque/ChequeList';
import HistoryList from '../History/HistoryList';
import { pastChequeListStyle } from './layoutStyle.css';

const PastChequeListContainer = () => {
  const location = useLocation();
  const isHistory =
    location?.pathname === '/history' || location?.pathname === '/print';
  console.log(location, isHistory);
  return (
    <div style={pastChequeListStyle}>
      <h1 style={{ color: '#fff', fontWeight: '900' }}>
        {isHistory ? 'History' : 'Past Cheques'}
      </h1>
      {isHistory ? <HistoryList /> : <ChequeList />}
    </div>
  );
};

export default PastChequeListContainer;
