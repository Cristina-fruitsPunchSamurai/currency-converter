
import './resultat.scss'

interface ResultatProps {
    currencyList: ResultatObject[]
}

interface ResultatObject {
    name: string;
    rate: number;
}
//{amount, currency, likes}

export default function Resultat({amount, currency} :ResultatProps) {
    return (
        <section className="resultat">
            <p className="resultat-number"> {currency.rate * amount} </p>
            <p className="resultat-country">{currency.name}</p>
            {/* <h1 className='likes'>{likes}</h1> */}
        </section>
    )
}