
import './header.scss'

interface HeaderProps {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    setDisplayCurrencies: React.Dispatch<React.SetStateAction<boolean>>;
    displayCurrencies: boolean;
}

function Header({ amount, setAmount, displayCurrencies, setDisplayCurrencies } : HeaderProps) {

    const handleChangeAmount = (event : any) => (Number(setAmount(event.target.value)))

    const handleClickDisplay = () => (setDisplayCurrencies(prevDisplayCurrencies => !prevDisplayCurrencies))

    return (
        <header className="header">
            <h1 className="header-title"> Converter </h1>
            <input
                type='number'
                placeholder='amount'
                value={amount}
                onChange={handleChangeAmount}
            />
            <p className="header-amount">{amount} {amount > 1 ? "euros" : "euro"}</p>
            <button className='header-btn' onClick={handleClickDisplay}> {displayCurrencies ? 'Hide currencies' : 'Show currencies'}</button>
        </header>
    )
}

export default Header;