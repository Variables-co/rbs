import React from 'react'
import classes from './landing.module.scss'

const Landing: React.FC = () => {
    return (<div className={classes.container}>
      <h6>SCANIA</h6>
      <div className={classes.lights}>
          <div className={classes.leftLight}></div>
          <div className={classes.rightLight}></div>
      </div>
    </div>)
}

export default Landing