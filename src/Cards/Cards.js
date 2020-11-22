import React from 'react';
import './Cards.scss';
import CardsItem from './CardItem';
import CardLabel1 from './images/CardLabel-1.svg';
import CardLabel2 from './images/CardLabel-2.svg';
import CardLabel3 from './images/CardLabel-3.svg';

const Cards = () => {
  const labels1 = [
    {
      icon: CardLabel1,
      title: 'Летняя',
    },
    {
      icon: CardLabel2,
      title: 'легковая',
    },
    {
      icon: CardLabel3,
      title: 'новая',
    },
  ];
  const hits1 = ['Новинка', 'Хит', 'Скидка'];

  const labels2 = [
    {
      icon: CardLabel1,
      title: 'Летняя',
    },
    {
      icon: CardLabel3,
      title: 'новая',
    },
  ];
  const hits2 = ['Новинка', 'Хит'];

  const hits3 = ['Новинка'];

  const labels4 = [
    {
      icon: CardLabel1,
      title: 'Летняя',
    },
    {
      icon: CardLabel2,
      title: 'легковая',
    },
  ];

  return (
    <section className="section-cards">
      <div className="container">
        <div className="row no-gutters">
          <div
            className="col-12 d-flex align-items-center justify-content-between"
            style={{ borderBottom: '1px solid rgb(219, 219, 219)' }}
          >
            <h2 className="title">Карточки товаров</h2>
            <a href="/#" className="link-to-catalog">Ссылка в каталог</a>
          </div>
        </div>
        <div className="row no-gutters">
          <CardsItem labels={labels1} hits={hits1} review={10} sale="1 250" price="599" />
          <CardsItem labels={labels2} hits={hits2} review={10} sale="1 250" price="599" />
          <CardsItem labels={labels2} hits={hits3} review={10} sale="1 250" price="9 570" />
          <CardsItem labels={labels4} review={10} price="599" />
          <CardsItem labels={labels4} review={10} price="599" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
