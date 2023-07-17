import './currencies.scss'
//Use state
import { useState} from "react"


interface CurrenciesProps {
    currenciesData : any;
    setSelectedCurrency: React.Dispatch<React.SetStateAction<{
        description: string;
        code: string;
    }>>;
}

// interface HeaderObject {
//     description: string;
//     code: string;
// }

function Currencies({ currenciesData, setSelectedCurrency } : CurrenciesProps) {

    const [search, setSearch] = useState<string>("")

    const handleClick = (c: any) => (setSelectedCurrency(c))

    const handleChangeSearch = (event : any) => (setSearch(event.target.value))

    const filteredCurrencies = currenciesData?.filter((c:any) => (
        c.description.toLowerCase().includes(search.toLowerCase())
    ))

    return currenciesData ? (
        <main className="currency">
            <div className="currency-content">
                <input
                    type="text"
                    placeholder="devise"
                    onChange={handleChangeSearch}
                    value={search} />
            </div>
            <ul className="currency-list">
                <li className="currency-list-title">Currencies</li>
                {filteredCurrencies.map((currency : any) => (
                    <li className="currency-list-text" key={currency.code}>
                        <div onClick={() => handleClick(currency)}
                            onKeyDown={() => handleClick(currency)}
                            role="button"
                            aria-description={`permet de convertir la somme définie en ${currency.description}`}
                            tabIndex={0}>
                            {currency.description}
                        </div>

                </li>
                ))}
            </ul>

        </main>
    ) : (<div> Loading ...</div>)
}

export default Currencies;