import React from 'react';
import Carousel from '../../components/carousel/carousel';
import Spinner from '../../components/spinner/Spinner';
import PropTypes from 'prop-types';
import './home.scss';


const homePage = ({ customImages }) => {
  return (
    <div className="home-page">
      <Spinner show={!customImages.length} spinnerClass="spinner-border text-primary"/>
      <Carousel images={customImages} id="homepage-carousel" wrap={false}/>
    </div>
  )
};

homePage.propTypes = {
  customImages: PropTypes.arrayOf(PropTypes.object),
};

homePage.defaultProps = {
  imcustomImagesages: [],
};

export default homePage;