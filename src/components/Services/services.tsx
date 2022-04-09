import React from 'react'
import classes from './services.module.scss'

const Services: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Nos services</h2>
            <h3>Prenez soin de vos routes et chantiers avec RBS !</h3>
            <p>Nous sommes spécialisés dans le balayage et nettoyage de voirie.<br />
                Nous proposons notre matériel de haute qualité pour le nettoyage et le lavage de routes, chantiers,
                autoroutes, villes, villages, allées, parking, sites industriels, carrières... <br /><br />
                Le balayage vous sera proposé avec ou sans haute pression selon les besoins.<br />
                Le chauffeur pourra utiliser un karcher à main pour des demandes plus précises ou des petites
                surfaces.<br />
                La balayeuse pourra également être équipée d’un balai de désherbage, afin d’arracher les mauvaises
                herbes situées dans le fil d’eau.<br /><br />
                Nous mettons tout en place pour vous satisfaire dans les meilleurs délais et conditions.<br /><br />
                Acteur dans le domaine de la propreté nous accompagnons nos clients professionnels et particuliers.<br /><br />
                Vous êtes une entreprise du bâtiment et travaux publics, collectivités, sites industriels, particuliers…<br /><br />
                Nous avons le service de nettoyage adapté à votre besoin.
            </p>
        </div>
    </div>)
}

export default Services