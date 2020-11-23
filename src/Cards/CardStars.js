import React from 'react';
import './CardStars.scss';

const CardStars = () => {
  const [randomId] = React.useState(() => Math.random().toString(36).substr(2));
  const [randomId2] = React.useState(() => Math.random().toString(36).substr(2));
  const [randomId3] = React.useState(() => Math.random().toString(36).substr(2));
  const [randomId4] = React.useState(() => Math.random().toString(36).substr(2));
  const [randomId5] = React.useState(() => Math.random().toString(36).substr(2));
  return (
    <div className="stars">
      <form action="" method="GET">
        { /* eslint-disable jsx-a11y/label-has-associated-control */}
        <input className="star star-5" id={randomId} type="radio" name="star" />
        <label className="star star-5" htmlFor={randomId} />
        <input className="star star-4" id={randomId2} type="radio" name="star" />
        <label className="star star-4" htmlFor={randomId2} />
        <input className="star star-3" id={randomId3} type="radio" name="star" />
        <label className="star star-3" htmlFor={randomId3} />
        <input className="star star-2" id={randomId4} type="radio" name="star" />
        <label className="star star-2" htmlFor={randomId4} />
        <input className="star star-1" id={randomId5} type="radio" name="star" />
        <label className="star star-1" htmlFor={randomId5} />
      </form>
    </div>
  );
};

export default CardStars;
