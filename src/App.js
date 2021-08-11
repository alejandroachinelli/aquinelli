import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Container } from 'semantic-ui-react'
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
class App extends React.Component{
  render(){
    return (
      <CartProvider>
        <Router>
          <Navbar></Navbar>
          <Container textAlign="justified">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/store" exact component={ItemListContainer}/>
              <Route path="/store/:categoryId" exact component={ItemListContainer}/>
              <Route path="/detail/:id" exact component={ItemDetailContainer}/>
              <Route path="/cart" exact component={Cart} />
              <Route path="/Checkout" exact component={Checkout} />
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    )
  }
}

export default App;