import React from 'react';
import classNames from 'classnames';
import './home.scss';


const homePage = ({ images }) => {
  
  return (
    <div className="home-page">
      <div id="homepage-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {images && images.map((image, idx) => (
            <div className={classNames('carousel-item', { active: idx === 0 })} key={`image_${idx}`} >
              <img className="d-block w-100" src={image.url} alt="" />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#homepage-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#homepage-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
};

export default homePage;