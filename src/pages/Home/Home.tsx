import React from 'react'
import classes from './home.module.scss'
import Loading from '../../components/Loading/loading';
import Menu from '@components/Menu/menu';
import Landing from '@components/Landing/landing';
import { useParams } from 'react-router-dom';
import Contact from '../../components/Contact/contact';
import Services from '@components/Services/services';
import Prices from '@components/Prices/prices';
import Stuff from '@components/Stuff/stuff';

const Home: React.FC = () => {
    const [loader, setLoader] = React.useState(true)
    const { menu } = useParams()

    const components = {
        'accueil': Landing,
        'nos-services': Services,
        'nos-forfaits': Prices,
        'notre-materiel': Stuff,
        'contact': Contact
    };

    const Component = components[menu];

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000);
    }, [])

    if (loader)
        return (<div className={classes.container}>
            <Loading />
        </div>)

    return (<div className={classes.container}>
        <Menu />
        <Component />
    </div>)
}

export default Home