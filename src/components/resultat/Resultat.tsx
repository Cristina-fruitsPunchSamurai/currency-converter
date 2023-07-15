
import './resultat.scss'

interface ResultatProps {
    currencyList: ResultatObject[]
    choosedCurrency : any;
}

interface ResultatObject {
    name: string;
    rate: number;
}
//{amount, currency, likes}

export default function Resultat({amount, choosedCurrency} :ResultatProps) {
    return (
        <section className="resultat">
            <p className="resultat-number"> {(choosedCurrency.rate * amount).toFixed(2)} </p>
            <p className="resultat-country">{choosedCurrency.name}</p>
            {/* <h1 className='likes'>{likes}</h1> */}
        </section>
    )
}