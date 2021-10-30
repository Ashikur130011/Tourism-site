import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Packages from './Pages/Home/Packages/Packages';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import PackageDetail from './Pages/PackageDetail/PackageDetail';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import MyBooking from './Pages/MyBooking/MyBooking';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import AddPackage from './Pages/AddPackage/AddPackage';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/packages">
          <Packages></Packages>
        </PrivateRoute>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/addPackage">
          <AddPackage></AddPackage>
        </Route>
        <PrivateRoute path="/details/:packageId">
          <PackageDetail></PackageDetail>
        </PrivateRoute>
        <PrivateRoute path="/myBooking">
          <MyBooking></MyBooking>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
