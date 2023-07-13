import './currencies.scss'

interface HeaderProps {
    currencyList : HeaderObject[]
}

interface HeaderObject {
    name: string;
    rate: number;
}

export default function Currencies({currencyList} : HeaderProps) {

    const handleClick = (e) => {
        const value = e.target.value;
    console.log(value)
    }

    return (
        <ul className="currency-list">
            <p className="currency-list-title">Currencies</p>
            {currencyList.map((currency : HeaderObject) => (
            //pour la key on a pas d'id
                <li className="currency-list-text" onClick={handleClick} key={currency.name}>{currency.name}</li>

            ))}
        </ul>
    )
}