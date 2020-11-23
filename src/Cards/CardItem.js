import React from 'react';
import { useDispatch } from 'react-redux';
import CardStars from './CardStars';
import CardItem from './images/CardItem.png';
import { addToCart, addToCompare, addToFavorites } from '../Global/globalSlice';

const CardsItem = ({
  // eslint-disable-next-line react/prop-types
  labels, hits, review, sale, price,
}) => {
  const [activeFavorites, setActiveFavorites] = React.useState(false);
  const [activeCompare, setActiveCompare] = React.useState(false);
  const [activeCart, setActiveCart] = React.useState(false);
  const dispatch = useDispatch();
  const handlerFavorites = (fav) => {
    setActiveFavorites((prev) => !prev);
    dispatch(addToFavorites(fav));
  };
  const handlerCompare = (comp) => {
    setActiveCompare((prev) => !prev);
    dispatch(addToCompare(comp));
  };
  const handlerCart = (cart) => {
    setActiveCart((prev) => !prev);
    dispatch(addToCart(cart));
  };
  return (
    <div className="col-12 col-md-6 col-xl-3">
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
          <button
            type="button"
            className="btn btn-buy-item"
            onClick={() => (activeCart ? handlerCart('remove') : handlerCart('add'))}
          >
            {activeCart ? 'Убрать из корзины' : 'купить товар'}
          </button>
        </div>
        <div className="card-item-navigation">
          <button
            type="button"
            className="btn btn-compare"
            onClick={() => (activeCompare ? handlerCompare('remove') : handlerCompare('add'))}
          >
            {activeCompare ? 'Убрать из сравнения' : 'Сравнить товар'}
          </button>
          <button
            type="button"
            className={`btn btn-favorite ${activeFavorites}`}
            onClick={() => (activeFavorites ? handlerFavorites('remove') : handlerFavorites('add'))}
          >
            {activeFavorites ? 'Удалить из избранного' : 'В избранное'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
