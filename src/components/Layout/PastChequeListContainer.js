import React from 'react';
import ChequeList from '../Cheque/ChequeList';
import { pastChequeListStyle } from './layoutStyle.css';

const PastChequeListContainer = () => {
  return (
    <div style={pastChequeListStyle}>
      <h1 style={{ color: '#fff', fontWeight: '900' }}>Past Cheques</h1>
      <ChequeList />
    </div>
  );
};

export default PastChequeListContainer;
