import React from 'react';
import './Search.scss';

const Search = () => {
  console.log('Search!');
  return (
    <section className="section-search">
      <div className="container">
        <div className="row no-gutters" style={{ marginRight: '-20px' }}>
          <div className="col-3" style={{ paddingRight: '20px' }}>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />

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
          <div className="col-9" style={{ paddingRight: '20px' }}>
            <div className="search">
              <input type="search" className="input-search" placeholder="Поиск по сайту" />
              <div className="search-params">
                <select className="search-params--filter">
                  <option>Все&nbsp;категории</option>
                  <option>Все&nbsp;категории&nbsp;2</option>
                </select>
                <button className="btn" type="button">Поиск</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
