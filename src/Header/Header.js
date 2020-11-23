import React from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCart, selectCompare, selectFavorites, setCallbackPopup, setLoginPopup,
} from '../Global/globalSlice';
import logo from './images/logo.png';
import favorites from './images/header-information-1.svg';
import compare from './images/header-information-2.svg';
import trunk from './images/header-information-3.svg';

const Header = () => {
  const dispatch = useDispatch();
  const selectCartItems = useSelector(selectCart);
  const selectFavoritesItems = useSelector(selectFavorites);
  const selectCompareItems = useSelector(selectCompare);
  return (
    <>
      <section className="section-navigation">
        <div className="container">
          <div className="row no-gutters h-100">
            <div className="col-12 col-md-6 col-xl-4">
              <nav className="navigation">
                <ul className="navigation-list">
                  <li className="navigation-list--item"><a href="/#">Главная</a></li>
                  <li className="navigation-list--item active"><a href="/#">О Компании</a></li>
                  <li className="navigation-list--item"><a href="/#">Ссылка 1</a></li>
                  <li className="navigation-list--item"><a href="/#">Ссылка 2</a></li>
                  <li className="navigation-list--item"><a href="/#">Ссылка 3</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-md-6 col-xl-8 d-flex justify-content-end">
              <button
                type="button"
                className="btn section-navigation--login"
                onClick={() => dispatch(setLoginPopup())}
              >
                Вход
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-information">
        <div className="container">
          <div className="row no-gutters align-items-center" style={{ marginRight: '-20px' }}>
            <div className="col-12 col-xl-2">
              <img src={logo} alt="Logotype" className="main-logo" />
            </div>
            <div className="col-12 col-md-6 col-xl-5 offset-xl-1 d-flex align-content-center">
              <div className="telephone-group">
                <div className="telephone-item">+380 98 170 00 740</div>
                <div className="telephone-item bold">+380 98 170 00 740</div>
                <button
                  type="button"
                  className="btn telephone-button"
                  onClick={() => dispatch(setCallbackPopup())}
                >
                  Перезвонить мне
                </button>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-xl-3 offset-xl-1 d-flex justify-content-around media-margin"
              style={{ paddingRight: '20px' }}
            >
              <div className="information-block information-block--compare">
                <img src={compare} alt="compare" />
                <span className="counter">{selectCompareItems}</span>
                <span>сравнение</span>
              </div>
              <div className="information-block information-block--favorites">
                <img src={favorites} alt="favorites" />
                <span className="counter">{selectFavoritesItems}</span>
                <span>избранное</span>
              </div>
              <div className="information-block information-block--trunk">
                <img src={trunk} alt="trunk" />
                <span className="counter">{selectCartItems}</span>
                <span>корзина</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Header;
