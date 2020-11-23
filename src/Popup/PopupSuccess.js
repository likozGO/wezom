import React from 'react';
import './Popup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, setSuccessPopup } from '../Global/globalSlice';

const PopupSuccess = () => {
  const dispatch = useDispatch();
  const selectEmailValue = useSelector(selectEmail);
  return (
    <>
      <div className="hidden-block" />
      <div className="modal-group" style={{ textAlign: 'center', background: 'unset' }}>
        <h3 className="title" style={{ marginBottom: '30px', color: '#fff' }}>
          {selectEmailValue}
          , Вы успешно подписаны на рассылку
        </h3>
        <div className="image" style={{ margin: '0 auto' }} />
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(setSuccessPopup())}
          style={{
            marginTop: '30px', color: '#fff', minHeight: '60px', background: 'rgb(59 181 74)', borderRadius: '8px',
          }}
        >
          Закрыть
        </button>
      </div>
    </>
  );
};

export default PopupSuccess;
