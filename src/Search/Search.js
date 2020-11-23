import React from 'react';
import './Search.scss';
import './NavigationMenu.scss';
import './SearchInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigationOpen, setNavigation } from '../Global/globalSlice';

const Search = () => {
  const [input, setInput] = React.useState('');
  const navigation = useSelector(selectNavigationOpen);
  const dispatch = useDispatch();
  return (
    <section className="section-search">
      <div className="container">
        <div className="row no-gutters" style={{ marginRight: '-20px' }}>
          <div className="col-12 col-md-3" style={{ paddingRight: '20px' }}>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" defaultChecked={navigation} onClick={() => dispatch(setNavigation())} />

                <ul id="menu">
                  <li><a href="/#">ССылка 1</a></li>
                  <li><a href="/#">ССылка 2</a></li>
                  <li><a href="/#">ССылка 3</a></li>
                  <li><a href="/#">ССылка 4</a></li>
                  <li><a href="/#">ССылка 5</a></li>
                  <li><a href="/#">ССылка 6</a></li>
                  <li><a href="/#">ССылка 7</a></li>
                </ul>
              </div>
              <button aria-label="open burger" type="button" />
              <span>Меню</span>
            </nav>
          </div>
          <div className="col-12 col-md-9" style={{ paddingRight: '20px' }}>
            <form
              action=""
              method="GET"
              style={{
                height: '100%',
                display: 'block',
              }}
            >
              <div className="search">
                <input type="search" className="input-search" placeholder="Поиск по сайту" required minLength="2" onChange={(e) => setInput(e.target.value)} value={input} />
                <div className="search-params">
                  <select className="search-params--filter">
                    <option>Все&nbsp;категории</option>
                    <option>Все&nbsp;категории&nbsp;2</option>
                  </select>
                  <button className="btn" type="submit" name="search-btn" value={input}>Поиск</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
