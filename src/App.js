import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Packages from './Pages/Home/Packages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/packages">
          <Packages></Packages>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
