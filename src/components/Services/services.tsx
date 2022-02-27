import React from 'react'
import classes from './services.module.scss'

const Services: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Nos services</h2>
            <h3>Prenez soin de vos routes et chantiers avec RBS !</h3>
            <p>Nous sommes spécialisés dans le balayage, nettoyage et le lavage des routes, chantiers, autoroutes, villes, villages, allées, parking...
                <br />Le balayage se fait avec ou sans haute pression selon les demandes.
                <br />Il est aussi possible d'utiliser un karcher à main pour des besoins plus spécifiques ou encore un balai de désherbage.
                <br /><br />
                Nous mettons tout en place pour vous satisfaire dans les meilleurs délais et conditions.
            </p>
        </div>
    </div>)
}

export default Services