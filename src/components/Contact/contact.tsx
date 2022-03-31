import React from 'react'
import classes from './contact.module.scss'

const Contact: React.FC = () => {
    const [response, setResponse] = React.useState("")
    const [nom, setNom] = React.useState("")
    const [entreprise, setEntreprise] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [mail, setMail] = React.useState("")
    const [message, setMessage] = React.useState("")

    const handleForm = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields: {nom: nom, entreprise: entreprise, phone: phone, mail: mail, message: message} })
        };
        fetch('https://api.airtable.com/v0/app5T1s3eOsHC6yW9/contact?api_key=key0c5v2v3pmHWujw', requestOptions)
            .then(() => {
                setResponse("success")
                setNom("")
                setMail("")
                setPhone("")
                setMessage("")
            }).catch(() => {
                setResponse("error")
            })
        return true
    }

    return (<div className={classes.container}>
        <div>
            <h2>Contact</h2>
            <form onSubmit={(e) => handleForm(e)}>
                <div className={classes.row}>
                    <input type="text" placeholder='Nom' onChange={(e) => setNom(e.target.value)} />
                    <input type="text" placeholder='Entreprise' onChange={(e) => setEntreprise(e.target.value)} />
                </div>
                <div className={classes.row}>
                    <input type="mail" placeholder='Adresse mail' onChange={(e) => setMail(e.target.value)} />
                    <input type="phone" placeholder='téléphone' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <textarea placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                <div className={classes.sendContainer}>
                    {response === "success" ? <span className={classes.reponse}>Votre message a bien été envoyé.</span> : response === "error" ? <span className={classes.reponse}>Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.</span> : <></>}
                    <button type='submit'>Envoyer le formulaire</button>
                </div>
            </form>
        </div>
    </div>)
}

export default Contact