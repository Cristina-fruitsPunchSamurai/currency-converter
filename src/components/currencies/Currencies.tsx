import './currencies.scss'
//Use state
import { useState} from "react"


interface HeaderProps {
    currenciesData : HeaderObject[]
    setSelectedCurrency: any;
    search: any;
    setSearch :any;
}

interface HeaderObject {
    name: string;
    rate: number;
}

export default function Currencies({ currenciesData, setSelectedCurrency } : HeaderProps) {

    const [search, setSearch] = useState("")

    const handleChangeSearch = (event : any) => (setSearch(event.target.value))

    const filteredCurrencies = currenciesData.filter((c) => (
        c.name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <main>
            <input
                type="text"
                placeholder="devise"
                onChange={handleChangeSearch}
                value={search} />

            <ul className="currency-list">
                <li className="currency-list-title">Currencies</li>
                {/* {currenciesData.map((c) => (
                    <li className="currency-list-text" key={c.name} onClick={() => setSelectedCurrency(c) }>
                    {c.name} </li>
                ) )} */}
                {filteredCurrencies.map((c) => (
                    <li className="currency-list-text" key={c.name} onClick={() => setSelectedCurrency(c)}>
                        {c.name} </li>
                ))}

            </ul>
        </main>
    )
}