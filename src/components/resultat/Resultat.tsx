
import './resultat.scss'
import { useEffect, useState } from "react";

interface ResultatProps {
    amount :number;
    selectedCurrency: any;
}


export default function Resultat({ amount, selectedCurrency } :ResultatProps) {

    ///////// STATE /////////
    const [result, setResult] = useState(0);

    ///////// EFFET /////////
    // useEffect(() => {
    //     const convert = async () => {
    //         const res = await fetch(`https://api.exchangerate.host/convert?from=EUR&to=${selectedCurrency.code}&amount=${amount}`)
    //         const data = await res.json()
    //         setResult(data.result)
    //     }
    //     convert()
    // }, [selectedCurrency, amount])


    //const rateConversion = () => ((selectedCurrency.rate * amount).toFixed(2))

    return (
        <section className="resultat">
            <p className="resultat-number">{amount * selectedCurrency.rate}</p>
            <p className="resultat-country">{selectedCurrency.name}</p>
        </section>
    )
}