
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderSite } from './compnents/Header/Header';
import { KarsheringBlk } from './compnents/KarsheringBlk/KarsheringBlk';
import { BlkRentTerms } from './compnents/blkRentTerms/blkRentTerms';

function App() {


  return (
    <div className="App">
      <HeaderSite
        logo='logo' headTel='+38 (099) 999 90 90'
      />

      <KarsheringBlk
        title='Каршеринг в Киеве LUX автомобили' decription='Закажи эксклюзивный автомобиль через мобильное приложение в любой точке города'
        bTxt='Скачать приложение'
      />

      <BlkRentTerms rentCondiTitle=' Условия аренды автомобиля' />

    </div>
  );
}

export default App;
