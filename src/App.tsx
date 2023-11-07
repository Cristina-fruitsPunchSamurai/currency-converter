import './App.css'
import data from '../data/currencies'
import Header from './components/header/Header'
import Currencies from './components/currencies/Currencies'
import Resultat from './components/resultat/Resultat'

///////// HOOKS /////////
import { useState, useEffect } from 'react'

function App() {

  ////////// STATES /////////
  const [amount, setAmount] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: 'Mexican Peso',
    rate: 20.5,
  });
  const [displayCurrencies, setDisplayCurrencies] = useState<boolean>(true);
  //const [apiData, setApiData] = useState(null)

///////// USE EFFECT /////////
  // useEffect(() => {
  //     const fetchData = async() => {
  //     const url = 'https://api.exchangerate.host/live?access_key=key'
  //     const result = await axios.get(url)
  //     console.log(result.data)
  //     setApiData(result.data)
  //     }

  //     fetchData()
  // }, []);


  return (
    <>
      <Header amount={amount} setAmount={setAmount} displayCurrencies={displayCurrencies} setDisplayCurrencies={setDisplayCurrencies} />
      {displayCurrencies && <Currencies currenciesData={data} setSelectedCurrency={setSelectedCurrency} />}
      <Resultat amount={amount} selectedCurrency={selectedCurrency} />
    </>
  )
}

export default App
