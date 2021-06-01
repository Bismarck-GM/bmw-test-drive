import React from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

const CarFamilySlide = ({ car }) => (
  <SwiperSlide>
    <img src={car.img_thumb} alt="Algo" />
    {console.log(car)}
    {car.name}
    {car.description}
  </SwiperSlide>
);

CarFamilySlide.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img_thumb: PropTypes.string,
  }).isRequired,
};

export default CarFamilySlide;
