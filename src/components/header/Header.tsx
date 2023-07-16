
import './header.scss'

interface HeaderProps {
    amount: number;
    setAmount: any;
    setDisplayCurrencies: any;
    displayCurrencies: any;
}

function Header({ amount, setAmount, displayCurrencies, setDisplayCurrencies } : HeaderProps) {

    const handleChangeAmount = (event : any) => (setAmount(Number(event.target.value)))

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
            <p>{amount}</p>
            <button className='header-btn' onClick={handleClickDisplay}> {displayCurrencies ? 'Hide currencies' : 'Show currencies'}</button>
        </header>
    )
}

export default Header;