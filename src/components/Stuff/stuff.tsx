import React from 'react'
import classes from './stuff.module.scss'

const Stuff: React.FC = () => {
    const [images, setImages] = React.useState([])

    React.useEffect(() => {
        const getPictures = async () => {
            await fetch('https://api.airtable.com/v0/app5T1s3eOsHC6yW9/images?api_key=key0c5v2v3pmHWujw')
                .then((res) => res.json())
                .then(data => setImages(data.records))
        }
        getPictures()
    }, [])

    return (<div className={classes.container}>
        <div>
            <h2>Notre matériel</h2>
            <h3>Un mot un geste ? RBS fait le reste.</h3>
            <p>Balayeuse aspiratrice à double poste pour une efficacité parfaite.
                Une cuve avec un volume d'eau important, une grande capacité d'aspiration et la rampe de lavage haute pression permettent un nettoyage performant.
            </p>
            <ul>
                {images.map((img) => {
                    img = img.fields
                    return <li key={img.name} >
                        <h4>{img.description}</h4>
                        <img alt={img.description} title={img.name} src={img.file[0].url} />
                    </li>
                })}
            </ul>
        </div>
    </div>)
}

export default Stuff