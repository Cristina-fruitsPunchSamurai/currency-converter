
import './resultat.scss'

interface ResultatProps {
    amount :number;
    selectedCurrency: any;
}


//{amount, currency, likes}

export default function Resultat({ amount, selectedCurrency } :ResultatProps) {

    const rateConversion = () => ((selectedCurrency.rate * amount).toFixed(2))

    return (
        <section className="resultat">
            <p className="resultat-number">{rateConversion()}</p>
            <p className="resultat-country">{selectedCurrency.name}</p>
        </section>
    )
}