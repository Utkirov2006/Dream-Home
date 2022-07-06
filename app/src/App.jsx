import React from 'react';
import Boxs from './components/Boxs';
import Cards from './components/Cards';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Wrappers from './components/Wrappers';
import Lists from './components/Lists';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row"><Navbar /></div>

        <div className="row"><Main /></div>

        <div className="row"><Cards /></div>

        <div className="row"><Boxs /> </div>

        <div className="row"><Wrappers /></div>


        <div className="row"><Content /></div>

        <div className="row"><Lists /></div>

        <div className="row"><Footer /></div>



      </div>

    </>
  );
};

export default App;



















