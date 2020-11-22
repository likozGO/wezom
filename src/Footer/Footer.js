import React from 'react';
import './Footer.scss';
import FooterLogo from './images/footer-logo.png';
import WezomLogo from './images/weezom.png';

const FooterLinks = () => (
  <ul className="footer-links">
    <li className="footer-links--item"><a href="/#">Ссылка 1</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 2</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 3</a></li>
    <li className="footer-links--item"><a href="/#">Ссылка 4</a></li>
  </ul>
);

const Footer = () => {
  console.log('Footer');
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="row bb-silver">
          <div className="col-5">
            <h3 className="footer-title">
              <span>Блок 1</span>
            </h3>
            <div className="footer-group">
              <h3>Будьте в курсе новостей и новинок!</h3>
              <h2>Подписывайтесь на рассылку</h2>
              <div className="footer-group--form">
                <input type="text" placeholder="Укажите свой email для подписки" className="input-subscribe" />
                <button type="button" className="btn btn-subscribe">
                  подписаться
                </button>
              </div>
            </div>
          </div>
          <div className="offset-1 col-2">
            <h3 className="footer-title">
              <span>Блок ссылок 1</span>
            </h3>
            <FooterLinks />
          </div>
          <div className="col-2">
            <h3 className="footer-title">
              <span>Блок 2</span>
            </h3>
            <FooterLinks />
          </div>
          <div className="col-2">
            <h3 className="footer-title">
              <span>Блок ссылок 3</span>
            </h3>
            <FooterLinks />
          </div>
        </div>
        <div className="row" style={{ marginTop: '30px', paddingBottom: '15px' }}>
          <div className="col-5 d-flex align-items-center">
            <img src={FooterLogo} alt="footer-logo" className="footer-logo" />
            <span className="footer-copy">© Copyright 2017. Тестовое задание Wezom</span>
          </div>
          <div className="offset-1 col-2">
            <ul className="social">
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
              <li className="social-item"><a href="/#" /></li>
            </ul>
          </div>
          <div className="offset-2 col-2 d-flex align-items-center footer-test">
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
