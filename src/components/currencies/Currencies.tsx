import './currencies.scss'
//Use state
import { useState } from "react"

interface HeaderProps {
    currencyList : HeaderObject[]
    setChoosedCurrency : any;
    search: any;
    setSearch :any;
}

interface HeaderObject {
    name: string;
    rate: number;
}

export default function Currencies({currencyList, setChoosedCurrency} : HeaderProps) {

    const [search, setSearch] = useState("")

    // je vais filtrer mon tableau de data passé en props 'CurrencyList'
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value )

        const filteredCurrencies = currencyList.filter((c) => {
            return c.name.toLowerCase().includes(search.toLocaleLowerCase())
        })

        filteredCurrencies.map((c) =>
            <li className="currency-list-text" key={c.name} onClick={() => {
            setChoosedCurrency(c)
        }}> {c.name}</li > )



        // let searchKeyWordArray = currencyList.filter((currency) => currency.name === search);
        // searchKeyWordArray.map((element) => (
        //     <li className="currency-list-text" key={element.name} onClick={() => {
        //         setChoosedCurrency(element)
        //     }}>{element.name}</li>

    }


    return (
        <main>
            <input
                type="text"
                onChange={handleSearch}
                value={search}
                placeholder="Chercher une devise"
                className="currency-searchBar"/>

            <ul className="currency-list">
                <li className="currency-list-title">Currencies</li>

                {currencyList.map((currency : HeaderObject) => (
                //pour la key on a pas d'id
                    <li className="currency-list-text" key={currency.name} onClick={() => {
                        setChoosedCurrency(currency)}}>{currency.name}</li>
                ))}


            </ul>
        </main>
    )
}