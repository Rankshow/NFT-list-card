import './App.css';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import Coin from './component/Coin';

function App() {
  const [coinItem, setCoinItem] = useState([])
  const [searchCoin, setSearchCoin] = useState("");

  // Api call with useEffect
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (res) => {
        setCoinItem(res.data.coins);
        
      }
    )
  }, []);

  // filtering the coins from the search input
  const filtererList = coinItem.filter((list) => {
    return list.name.toLowerCase().includes(searchCoin.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="crptoHeader">
         <input type="text" placeholder='Crypto Coin....' onChange={(e) => {
          setSearchCoin(e.target.value)  
       }}/>
        </div> 
        <div className="cryptoDisplay">
          {filtererList.map((list) => {
            return (
              <>
                <Coin name={list.name} icon={list.icon} symbol={list.symbol} price={list.price}/>
                 
              </>
              ) 
          })}
        </div>
    </div>
  );
}

export default App;
