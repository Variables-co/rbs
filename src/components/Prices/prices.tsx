import React from 'react'
import classes from './prices.module.scss'

const Prices: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Nos forfaits</h2>
            <h3>RBS s’adapte à vos demandes ! </h3>
            <p>Choisissez le forfait adapté à vos besoins ou demandez-nous conseil pour trouver le service le plus approprié selon nos différentes options (avec ou sans haute pression, balai de désherbage, karcher à main). Nous sommes disponibles 7j/7 24h/24.
                <br /><br />Nos différentes solutions :
            </p>
            <ul>
                <li>
                    <h5>2 heures</h5>
                </li>
                <li>
                    <h5>Demi-journée</h5>
                </li>
                <li>
                    <h5>Journée</h5>
                </li>
                <li>
                    <h5>Nuit</h5>
                </li>
            </ul>
        </div>
    </div>)
}

export default Prices