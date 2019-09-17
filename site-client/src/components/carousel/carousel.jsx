import React from 'react';
import classNames from 'classnames';
import carouselService from './carouselService';
import PropTypes from 'prop-types';

const Carousel = ({ images, id, wrap}) => {
  carouselService(id, images, wrap);

  return(
    <div id={id} className="carousel slide" data-ride="carousel">
        {images && (
          <ol className="carousel-indicators">
            {images.map((item, idx) => (
              <li className={classNames(`item${idx}`, { active: idx === 0})} key={`item_${idx}`}></li>
            ))}
          </ol>
        )}
        <div className="carousel-inner">
          {images && images.map((image, idx) => (
            <div className={classNames('carousel-item', { active: idx === 0 })} key={`image_${idx}`} >
              <img className="d-block w-100" src={image.url} alt="" />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  wrap: PropTypes.bool,
};

Carousel.defaultProps = {
  images: [],
  id: '',
  wrap: false,
};

export default Carousel;