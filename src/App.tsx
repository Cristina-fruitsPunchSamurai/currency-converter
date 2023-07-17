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
    description: 'Mexican Peso',
    code: 'MXN',
  });
  //console.log(selectedCurrency)
  const [displayCurrencies, setDisplayCurrencies] = useState<boolean>(true);
  const [apiData, setApiData] = useState(null)
console.log( apiData)

///////// USE EFFECT /////////
  useEffect(() => {
      const fetchData = async() => {
      const url = 'https://api.exchangerate.host/symbols'
      const result = await fetch(url)
      const data = await result.json()
      setApiData(Object.values(data.symbols))
      }

      fetchData()
  }, []);


  return (
    <>
      <Header amount={amount} setAmount={setAmount} displayCurrencies={displayCurrencies} setDisplayCurrencies={setDisplayCurrencies} />
      {displayCurrencies && <Currencies currenciesData={apiData} setSelectedCurrency={setSelectedCurrency} />}
      <Resultat amount={amount} selectedCurrency={selectedCurrency} />
    </>
  )
}

export default App
