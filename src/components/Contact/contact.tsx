import React from 'react'
import classes from './contact.module.scss'

const Contact: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Contact</h2>
            <form>
                <div className={classes.row}>
                    <input type="text" placeholder='Nom' />
                    <input type="text" placeholder='Entreprise' />
                </div>
                <div className={classes.row}>
                    <input type="mail" placeholder='Adresse mail' />
                    <input type="phone" placeholder='téléphone' />
                </div>
                <textarea placeholder='Message' />
                <button type='submit'>Envoyer le formulaire</button>
            </form>
        </div>
    </div>)
}

export default Contact