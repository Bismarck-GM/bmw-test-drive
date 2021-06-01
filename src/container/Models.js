/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  Typography,
} from '@material-ui/core';
// import Divider from '@material-ui/core/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import { fetchCarFamilies } from '../redux/actions';
// import CarFamilySlide from '../components/CarFamilySlide';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0',
    height: '100%',
    maxWidth: '100vw',
    justifySelf: 'center',
    minWidth: '0',
  },
  swiperWrapper: {
    maxWidth: '100%',
    padding: '0 4rem',
    position: 'relative',
  },

}));

SwiperCore.use([Navigation]);

const Models = () => {
  const classes = useStyles();
  const { loading, cars } = useSelector((state) => state.carFamily);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (loading) {
      dispatch(fetchCarFamilies());
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <Typography variant="h3">
        LATEST MODELS
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Select from any of the Models
      </Typography>
      <hr style={{
        border: 'dotted 5px',
        width: '10%',
        borderStyle: 'none none dotted none',
        color: 'grey',
        opacity: '30%',
        marginTop: '2rem',
        marginBottom: '1rem',
      }}
      />
      <div className={classes.swiperWrapper}>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={0}
          resizeObserver
          navigation={{
            nextEl: '.swiperNext',
            prevEl: '.swiperPrevious',
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {
            loading
              ? (
                <>
                  <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 1</SwiperSlide>
                  <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 2</SwiperSlide>
                  <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 3</SwiperSlide>
                </>
              )
              : (
                cars.map((car) => (
                  <SwiperSlide key={car.id} style={{ width: '100%', position: 'relative' }}>
                    <img src={car.img_thumb} alt={car.name} style={{ width: '100%' }} />
                    <Typography variant="h4" align="center" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      {car.shortname}
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                      {car.name}
                    </Typography>
                    <hr style={{
                      border: 'dotted 5px',
                      width: '30%',
                      borderStyle: 'none none dotted none',
                      color: 'grey',
                      opacity: '30%',
                      marginTop: '1rem',
                      marginBottom: '1rem',
                    }}
                    />

                    <Typography variant="subtitle2" align="center">
                      {car.description}
                    </Typography>
                  </SwiperSlide>
                ))
              )
          }
        </Swiper>
        <div className="swiperNext">
          <GrCaretNext />
        </div>
        <div className="swiperPrevious">
          <GrCaretPrevious />
        </div>
      </div>
    </div>

  );
};

export default Models;
