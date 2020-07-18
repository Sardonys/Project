import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './Component/Navigation';
import Searchbox from './Component/Searchbox';
import Internav from './Component/Internav';
import Categories from './Component/Categories';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Searchbox/>
    <Internav/>
    <Categories/>
    <Footer/>
    </div>
  );
}

export default App;
