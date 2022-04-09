import React from 'react'
import classes from './stuff.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Pagination, Thumbs, Mousewheel } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/parallax'
import 'swiper/css/pagination'

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
            <p>Nous vous proposons notre matériel de qualité, des balayeuses aspiratrices à double poste pour une efficacité optimale. 
            <br />La cuve de 5000 litres, la grande capacité d’aspiration et la rampe de lavage haute pression (250 bars à 200L/minutes) permettent un nettoyage performant.
                <br /><br />Il est également possible d’utiliser des balais spécifiques pour des besoins précis comme le balai de désherbage.

            </p>
            <Swiper
                className={classes.swiper}
                modules={[Parallax, Autoplay, Pagination, Thumbs, Mousewheel]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                thumbs={{autoScrollOffset: 0, multipleActiveThumbs: true}}
                parallax={true}
                mousewheel={true}
                direction='vertical'
            >
                {images.map((img) => {
                    img = img.fields
                    return <SwiperSlide key={img.name} >
                        <h4 data-swiper-parallax="-300"
                            data-swiper-parallax-duration="600">{img.description}</h4>
                        <img data-swiper-parallax-opacity="0.5" alt={img.description} title={img.name} src={img.file[0].url} />
                    </SwiperSlide>
                })}
                ...
            </Swiper>
            {/* <ul>
                {images.map((img) => {
                    img = img.fields
                    return <li key={img.name} >
                        <h4>{img.description}</h4>
                        <img alt={img.description} title={img.name} src={img.file[0].url} />
                    </li>
                })}
            </ul> */}
        </div>
    </div>)
}

export default Stuff