import React from 'react';
import {
  makeStyles,
  // Container,
  Typography,
} from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
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
    padding: '0 4rem',
    position: 'relative',
  },

}));

SwiperCore.use([Navigation]);

const Models = () => {
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
          slidesPerView={2}
          spaceBetween={50}
          resizeObserver
          navigation={{
            nextEl: '.swiperNext',
            prevEl: '.swiperPrevious',
          }}
        >
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 4</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 5</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 6</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 7</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 8</SwiperSlide>
          <SwiperSlide style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>Slide 9</SwiperSlide>
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
