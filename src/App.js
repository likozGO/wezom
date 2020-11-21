import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement, increment, incrementAsync, incrementByAmount, selectCount,
} from './Global/globalSlice';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import Main from './Main/Main';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <Footer />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <span>{count}</span>
            <button
              type="button"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
              type="button"
              onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
              Add Amount
            </button>
            <button
              type="button"
              onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
              Add Async
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
