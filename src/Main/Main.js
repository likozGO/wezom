import React from 'react';
import './Main.scss';
import { useSelector } from 'react-redux';
import { CustomSelect, CustomInput } from './CustomSelect';
import { selectNavigationOpen } from '../Global/globalSlice';

const Main = () => {
  const navigation = useSelector(selectNavigationOpen);
  return (
    <section className="section-main">
      <div className="container">
        <div className="row no-gutters" style={{ marginRight: '-20px' }}>
          <div className="offset-3" style={{ display: !navigation && 'none' }} />
          <div className={navigation ? 'col-12 col-lg-9' : 'col-12'} style={{ paddingRight: '20px' }}>
            <form className="filter" method="GET">
              <div className="filter-header">
                <a href="/#" className="filter-header--category active"><span>Ссылка 1</span></a>
                <a href="/#" className="filter-header--category"><span>Ссылка 2</span></a>
                <a href="/#" className="filter-header--category"><span>Ссылка 3</span></a>
                <a href="/#" className="filter-header--category"><span>Ссылка 4</span></a>
                <a href="/#" className="filter-header--category"><span>Ссылка 5</span></a>
              </div>
              <div className="filter-body">
                <div className="filter--tab">
                  {/* <div className="filter--tab-switcher"> */}
                  <input type="radio" name="tab-btn" id="tab-btn-1" value="" defaultChecked />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="tab-btn-1">Tab 1</label>
                  <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="tab-btn-2">Tab 2</label>
                  <div className="filter-selects-1">
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomInput textMin="50" textMax="250000" />
                  </div>
                  <div className="filter-selects-2">
                    <CustomSelect />
                    <CustomSelect />
                    <CustomSelect />
                    <CustomInput textMin="50" textMax="250000" />
                  </div>
                </div>

                <div className="button-group">
                  {/* eslint-disable-next-line react/button-has-type */}
                  <button type="reset" className="btn btn-reset">Очистить фильтр</button>
                  <button type="submit" className="btn btn-submit">Применить фильтр</button>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
