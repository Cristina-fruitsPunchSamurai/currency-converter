import './App.css'
import data from '../data/currencies'
import Header from './components/header/Header'
import Currencies from './components/currencies/Currencies'
import Resultat from './components/resultat/Resultat'
//import Likes from './components/likes/Likes'

//Use state
import { useState } from 'react'

function App() {

  ////////// STATES /////////
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: 'Mexican Peso',
    rate: 21.229867
  });
  const [displayCurrencies, setDisplayCurrencies] = useState(true);


  return (
    <>
      <Header amount={amount} setAmount={setAmount} displayCurrencies={displayCurrencies} setDisplayCurrencies={setDisplayCurrencies} />
      {displayCurrencies && <Currencies currenciesData={data} setSelectedCurrency={setSelectedCurrency} />}
      <Resultat amount={amount} selectedCurrency={selectedCurrency} />
    </>
  )
}

export default App
