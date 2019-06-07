import React, { Component } from 'react';
import PropTypes from'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(each => {
        return (
        <Card 
          cards = {each}
          // key = {each.id}
          />
          )
      })}
        {/* /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/} 
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;


// import React, { Component } from 'react';
// import Card from './Card';
// import PropTypes from'prop-types';

// const Cards = props => {
//   return (
//     <div className="cards-container">

//       {/* Using the cards prop, map over the list creating a 
//           new Card component for each passing the card as the only prop*/}
//     </div>
//   )
// }

// // Make sure you include prop types for all of your incoming props

// export default Cards;