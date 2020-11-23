import React from 'react';
import './Popup.scss';
import './PopupCallback.scss';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { setCallbackPopup } from '../Global/globalSlice';

const PopupCallback = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState('');
  const [error, setError] = React.useState('');
  const errorHint = (e) => {
    if (phone.replace(/[^0-9]/g, '').length < 12) e.preventDefault(); setError('Fill phone!');
    return true;
  };
  return (
    <>
      <div className="hidden-block" />
      <div className="modal-group">
        <button className="close" type="button" onClick={() => dispatch(setCallbackPopup())} />
        <h3 className="title">
          Перезвоните мне
        </h3>
        <h4 className="number">
          Номер телефона
        </h4>
        <form method="POST">
          <InputMask type="tel" name="phone" className="input-tel" mask="+38 (099) 999-99-99" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={errorHint} type="submit" className="btn button-tel">
            Перезвоните мне
          </button>
          <span style={{ marginTop: '15px', color: 'red' }}>
            {error && `*${error}`}
          </span>
        </form>
      </div>
    </>
  );
};

export default PopupCallback;
