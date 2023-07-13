
import './header.scss'

interface HeaderProps {
    amount: number;
    setAmount: any;
    setDisplayCurrencies: any;
    displayCurrencies: any;
}

export default function Header({ amount, setAmount, setDisplayCurrencies, displayCurrencies, } : HeaderProps) {
    return (
        <header className="header">
            <h1 className="header-title"> Converter </h1>
            <input
                type="number"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
            />
            {amount > 1 ? <p className="header-number"> {amount} euros </p> : <p className="header-number">  {amount} euro</p> }
            <button onClick={() => setDisplayCurrencies((prevState) => !prevState)}>
                {displayCurrencies ? "MASQUER LA LISTE" : "AFFICHER LA LISTE"}
            </button>
        </header>
    )
}