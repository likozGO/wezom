import React from 'react';
import './Popup.scss';
import './PopupLogin.scss';
import { useDispatch } from 'react-redux';
import { setLoginPopup } from '../Global/globalSlice';

const PopupLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  return (
    <>
      <div className="hidden-block" />
      <div className="modal-group">
        <button className="close" type="button" onClick={() => dispatch(setLoginPopup())} />
        <div className="modal-wrapper">
          <h3 className="title">
            Вход в личный кабинет
          </h3>
          <form action="" method="POST">
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">Ваш email</label>
              <input type="email" name="email" className="input-log" id="email" placeholder="mikel_ivanov98@gmail.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="password">Пароль</label>
              <input type="password" name="password" className="input-log" id="password" placeholder="*************" required minLength="4" />
            </div>
            <div className="form-group form-group--checkbox">
              <input type="checkbox" name="auth" id="auth" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="auth">Запомнить меня</label>
            </div>
            <div className="form-group form-group--links">
              <a href="/#">Забыли пароль?</a>
              <a href="/#">Регистрация</a>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-submit">
                Войти в личный кабинет
              </button>
            </div>
          </form>
        </div>
        <div className="modal-wrapper">
          <h3 className="title">
            Войти с помощью
          </h3>
          <button type="button" className="btn btn-social btn-social--facebook">Facebook</button>
          <button type="button" className="btn btn-social btn-social--twitter">Twitter</button>
          <button type="button" className="btn btn-social btn-social--google">Google</button>
        </div>
      </div>
    </>
  );
};

export default PopupLogin;
