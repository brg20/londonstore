import './App.css';
import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'; 
import {Route, Switch, BrowserRouter} from 'react-router-dom' ;
import {CartContext} from './componentes/CartContext' ;
import Cart from './componentes/Cart';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';


function App() {
  return (
   <>
   <BrowserRouter>
   
   <CartContext>
      <NavBar/>
      
   <Switch>
   
   <Route exact path = "/" component={ Inicio } />
   <Route path="/categoria/:categoria">
      <ItemListContainer />
   </Route>
   <Route path="/item/:id">
      <ItemDetailContainer/>
   </Route>
   <Route path="/cart">
      <Cart/>
   </Route>
   
   </Switch>
   </CartContext>
   </BrowserRouter>
   <Footer />
  </>
  );
}

export default App;