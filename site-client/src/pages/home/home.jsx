import React from 'react';
import Carousel from '../../components/carousel/carousel';
import Spinner from '../../components/spinner/Spinner';
import PropTypes from 'prop-types';
import './home.scss';


const homePage = ({ images, customImages }) => {
  console.log('customImages JSX', customImages);
  return (
    <div className="home-page">
      <Spinner show={!images.length} spinnerClass="spinner-border text-primary"/>
      <Carousel images={images} id="homepage-carousel" wrap={false}/>
    </div>
  )
};

homePage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

homePage.defaultProps = {
  images: [],
};

export default homePage;