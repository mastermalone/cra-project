import React from 'react';
import Spinner from '../../components/spinner/Spinner';
import Card from '../../components/card/card';
import PropTypes from 'prop-types';

const about = ({ pageContent }) => {
  const { date, description, subtitle, title} = pageContent;

  return (
    <div className="about-page">
      <Spinner show={!description} spinnerClass="spinner-border text-primary"/>
      {description && description.length && (
        <div>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
          <h6>Date: {date}</h6>
          {/* <Card text={description} /> */}
          
            {description.map((desc, idx) => (
              // <li key={`desc_${idx}`}>{desc}</li>
              <Card text={desc.text} image={desc.image}  key={`desc_${idx}`}/>
            ))}
         
        </div>
      )}
    </div>
  );
};

about.propTypes = {
  pageContent: PropTypes.objectOf(PropTypes.any),
};

about.defaultProps = {
  pageContent: {},
};

export default about;