import React from 'react';
import PropTypes from'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.each.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.each.img} />
        </div>
        <span>By {props.each.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
