import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import Main from './Main/Main';
import Cards from './Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
