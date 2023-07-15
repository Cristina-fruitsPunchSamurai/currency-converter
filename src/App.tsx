import './App.css'
import currencies from '../data/currencies'
import Header from './components/header/Header'
import Currencies from './components/currencies/Currencies'
import Resultat from './components/resultat/Resultat'
//import Likes from './components/likes/Likes'

//Use state
import { useState } from "react"

function App() {

  const [displayCurrencies, setDisplayCurrencies] = useState(true);
  const [amount, setAmount] = useState(0);
  const [choosedCurrency, setChoosedCurrency] = useState('Mexican Peso');




  return (
    <>
      <Header amount={amount} setAmount={setAmount} setDisplayCurrencies={setDisplayCurrencies} displayCurrencies={displayCurrencies} />
      {/* <Likes setLikes={setLikes} /> */}
      {displayCurrencies && <Currencies currencyList={currencies} setChoosedCurrency={setChoosedCurrency}/>}
      <Resultat amount={amount} choosedCurrency={choosedCurrency}/>
    </>
  )
}

export default App
