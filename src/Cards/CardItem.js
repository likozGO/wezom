import React from 'react';
import CardStars from './CardStars';
import CardItem from './images/CardItem.png';

const CardsItem = ({
  // eslint-disable-next-line react/prop-types
  labels, hits, review, sale, price,
}) => (
  <div className="col-3">
    <div className="card-item">
      <div className="card-item-mark">
        Mark
      </div>
      <a href="/#" className="card-item-title">
        Антифриз Fosser Antifreeze FA 12 Readymix 1 л Concentrat, Germ
      </a>
      <div className="card-item-about">
        <CardStars />
        <a href="/#">{`${review ? `Отзывы ${review}` : 'Без отзывов'}`}</a>
        <span>В наличии: 24 шт.</span>
      </div>
      <div className="card-item-image" style={{ marginBottom: !hits && '58px' }}>
        <img src={CardItem} alt="Card" />
        <ul className="card-item-image--labels">
          {labels.map((a, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <img src={a.icon} alt="Card label" />
              <span>{a.title}</span>
            </li>
          ))}

        </ul>
      </div>
      {hits && (
      <div className="card-item-hits">
        {hits.map((a, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="hit-item" key={i}>{a}</div>
        ))}
      </div>
      )}
      <div className="card-item-price">
        <span className="actual-price">
          {price}
          <span className="currency"> грн.</span>
        </span>
        <span className="old-price" style={{ display: !sale && 'none' }}>
          {sale}
          <span className="currency"> грн.</span>
        </span>
      </div>
      <div className="card-item-btn">
        <button type="button" className="btn btn-buy-item">купить товар</button>
      </div>
      <div className="card-item-navigation">
        <button type="button" className="btn btn-compare">Сравнить&nbsp;товар</button>
        <button type="button" className="btn btn-favorite">В&nbsp;избранное</button>
      </div>
    </div>
  </div>
);

export default CardsItem;
