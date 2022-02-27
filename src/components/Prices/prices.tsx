import React from 'react'
import classes from './prices.module.scss'

const Prices: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Nos forfaits</h2>
            <h3>Prenez soin de vos routes et chantiers avec RBS !</h3>
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