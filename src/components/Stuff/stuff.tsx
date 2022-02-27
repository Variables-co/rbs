import React from 'react'
import classes from './stuff.module.scss'

const Stuff: React.FC = () => {
    return (<div className={classes.container}>
        <div>
            <h2>Notre matériel</h2>
            <h3>Un mot un geste ? RBS fait le reste.</h3>
            <p>Balayeuse aspiratrice à double poste pour une efficacité parfaite. 
                Une cuve avec un volume d'eau important, une grande capacité d'aspiration et la rampe de lavage haute pression permettent un nettoyage performant. 
            </p>
        </div>
    </div>)
}

export default Stuff