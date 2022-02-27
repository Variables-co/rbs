import React from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './menu.module.scss'

const Menu: React.FC = () => {
    const { menu } = useParams()

    return (<div className={classes.container}>
        <h6>Rapide Balayage Services</h6>
        <ul className={classes.menu}>
            <li className={menu === "accueil" || !menu ? classes.active : ""}>
                <Link to="/accueil">Accueil</Link>
            </li>
             <li className={menu === "nos-services" ? classes.active : ""}>
                <Link to="/nos-services">Nos services</Link>
            </li>
             <li className={menu === "nos-forfaits" ? classes.active : ""}>
                <Link to="/nos-forfaits">Nos forfaits</Link>
            </li>
             <li className={menu === "notre-materiel" ? classes.active : ""}>
                <Link to="/notre-materiel">Notre matériel</Link>
            </li>
             <li className={menu === "contact" ? classes.active : ""}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>)
}

export default Menu