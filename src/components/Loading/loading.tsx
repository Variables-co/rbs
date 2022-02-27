import React from 'react'
import classes from './loading.module.scss'

const Loading: React.FC = () => {
  const [loader, setLoader] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])

  return (<div className={classes.container}>
    <div className={loader ? classes.loading : classes.loaded}>
      <h6>
        Rapide
      </h6>
      <h6>
        Balayage
      </h6>
      <h6>
        Services
      </h6>
    </div>
  </div>)
}

export default Loading