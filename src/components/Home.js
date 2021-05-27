import React from 'react';
import {
  makeStyles,
  // Container,
  Typography,
} from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
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
  },
}));

SwiperCore.use([Navigation]);

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h3">
        LATEST MODELS
      </Typography>
      <Typography variant="subtitle1">
        Select from any of the Models
      </Typography>
      <div className={classes.swiperWrapper}>
        <Swiper
          className="mySwiper"
          navigation
          slidesPerView={3}
          spaceBetween={50}
          resizeObserver
        >
          <SwiperSlide style={{ width: '200px' }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 4</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 5</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 6</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 7</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 8</SwiperSlide>
          <SwiperSlide style={{ width: '200px' }}>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
};

export default Home;
