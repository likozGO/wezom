import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import Main from './Main/Main';
import Cards from './Cards/Cards';
import Popup from './Popup/Popup';
import PopupCallback from './Popup/PopupCallback';
import PopupLogin from './Popup/PopupLogin';
import { selectCallbackPopup, selectLoginPopup, selectSuccessPopup } from './Global/globalSlice';
import PopupSuccess from './Popup/PopupSuccess';

function App() {
  const selectPopupCallback = useSelector(selectCallbackPopup);
  const selectPopupLogin = useSelector(selectLoginPopup);
  const selectPopupSuccess = useSelector(selectSuccessPopup);
  return (
    <>
      <Header />
      <Search />
      <Main />
      <Cards />
      <Footer />
      {selectPopupCallback && (
      <Popup className="modal-callback">
        <PopupCallback />
      </Popup>
      )}
      {selectPopupLogin && (
      <Popup className="modal-login">
        <PopupLogin />
      </Popup>
      )}
      {selectPopupSuccess && (
        <Popup className="modal-success">
          <PopupSuccess />
        </Popup>
      )}
    </>
  );
}

export default App;
