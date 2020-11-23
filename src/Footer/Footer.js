import React, { useState } from 'react';
import './Footer.scss';
import { useDispatch } from 'react-redux';
import FooterLogo from './images/footer-logo.png';
import WezomLogo from './images/weezom.png';
import { setSuccessPopup, setEmail } from '../Global/globalSlice';

const FooterLinks = () => (
  <ul className="footer-links">
    <li className="footer-links--item"><a href="/#">Ссылка 1</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 2</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 3</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 4</a></li>
  </ul>
);

const Footer = () => {
  const [inputEmail, setInputEmail] = useState('');
  const dispatch = useDispatch();
  const submitSubscribe = (e) => {
    e.preventDefault();
    dispatch(setSuccessPopup());
    dispatch(setEmail(inputEmail));
  };
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="row bb-silver">
          <div className="col-12 col-xl-5">
            <h3 className="footer-title">
              <span>Блок 1</span>
            </h3>
            <div className="footer-group">
              <h3>Будьте в курсе новостей и новинок!</h3>
              <h2>Подписывайтесь на рассылку</h2>
              <form className="footer-group--form" method="POST" onSubmit={(e) => submitSubscribe(e)}>
                <input type="email" name="email" placeholder="Укажите свой email для подписки" className="input-subscribe" required onChange={(e) => setInputEmail(e.target.value)} />
                <button type="submit" className="btn btn-subscribe">
                  подписаться
                </button>
              </form>
            </div>
          </div>
          <div className="col-6 col-md-4 offset-xl-1 col-xl-2">
            <h3 className="footer-title">
              <span>Блок ссылок 1</span>
            </h3>
            <FooterLinks />
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <h3 className="footer-title">
              <span>Блок 2</span>
            </h3>
            <FooterLinks />
          </div>
          <div className="col-12 col-md-4 col-xl-2">
            <h3 className="footer-title">
              <span>Блок ссылок 3</span>
            </h3>
            <FooterLinks />
          </div>
        </div>
        <div className="row" style={{ marginTop: '30px', paddingBottom: '15px' }}>
          <div className="col-12 col-xl-5 d-flex align-items-center">
            <img src={FooterLogo} alt="footer-logo" className="footer-logo" />
            <span className="footer-copy">© Copyright 2017. Тестовое задание Wezom</span>
          </div>
          <div className="col-6 offset-xl-1 col-xl-2">
            <ul className="social">
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
            </ul>
          </div>
          <div className="col-6 offset-xl-2 col-xl-2 d-flex align-items-center footer-test">
            <img src={WezomLogo} alt="Wezom logo" />
            <div>
              <span>Разработка&nbsp;тестового</span>
              <span>Wezom&nbsp;Agency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
