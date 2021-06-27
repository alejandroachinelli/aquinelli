import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Itemcontainer from './components/Itemcontainer/Itemcontainer';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Itemcontainer title={'Bienvenido al e-commerce'} greeting={'Estos productos tenemos actualmente en stock'}></Itemcontainer>
      </div>
    )
  }
}

export default App;