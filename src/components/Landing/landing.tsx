import React from 'react'
import classes from './landing.module.scss'

const Landing: React.FC = () => {
    const [loader, setLoader] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 10000);
    }, [])


    return (<div className={classes.container}>
      <h6>SCANIA</h6>
      <div className={classes.lights}>
          <div className={classes.leftLight}></div>
          <div className={classes.rightLight}></div>
      </div>
    </div>)
}

export default Landing