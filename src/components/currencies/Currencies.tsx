import './currencies.scss'

interface HeaderProps {
    currencyList : HeaderObject[]
}

interface HeaderObject {
    name: string;
    rate: number;
}

export default function Currencies({currencyList, choosedCurrency, setChoosedCurrency} : HeaderProps) {


    return (
        <ul className="currency-list">
            <p className="currency-list-title">Currencies</p>
            {currencyList.map((currency : HeaderObject) => (
            //pour la key on a pas d'id
                <li className="currency-list-text" key={currency.name} onClick={() => { setChoosedCurrency(currency)}}>{currency.name}</li>

            ))}
        </ul>
    )
}