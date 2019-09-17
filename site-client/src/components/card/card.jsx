import React from 'react';
import './card.scss';

const Card = ({ text, image }) => {
  return (
    <React.Fragment>
      {text && (
        <div className="card row">
          {image && (
            <div className="card-image">
              <img className="img-fluid" src={image} alt="The thumbnail"/>
            </div>
          )}
          <div className="card-text">{text}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Card;