
import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import MyOrder from './screens/MyOrder'
import {CartProvider} from './components/ContextReducer';


function App() {
  return (
  <HashRouter>
  <CartProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route exact path="/" render="" element={<Home/>}/>
          <Route exact path="/login"  element={<Login/>}/>
          <Route exact path="/createuser"  element={<SignUp/>}/>
          <Route exact path="/myorder"  element={<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
 
  </CartProvider>
  </HashRouter>
  );
}

export default App;
