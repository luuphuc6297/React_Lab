import React, {Component} from 'react';import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';

import "antd/dist/antd.css";
import './App.css';
import Register from './components/HomePage/Register'
import  Layouts  from './components/Layout/Layouts';
import LoginPage from './components/HomePage/LoginPage';
import HomePageContent from "./components/HomePage/HomePageContent";
import Cart from "./components/Cart/Cart";
// import CarouselPage from './components/Carousel/Carousel';
// // import Cards from './components/Card/Cards';
// // import Sider from './components/Sider/Sider';
// // import MenuCard from './components/Card/MenuCard';
// // import ListView from "./components/Card/ListView";
// // import Navigation from './components/Navigation/Navigation';
// // import ListCartPage from './components/Header/ListCartPage';
// // import Footer from './components/Footer/Footer';
//
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Layouts>
                            <Route exact path ='/' component = {HomePageContent}/>
                            <Route  path ='/login' component = {LoginPage}/>
                            <Route path = "/register" component = {Register}/>
                            <Route path = '/cart' component = {Cart}/>
                    </Layouts>
                </Router>
            </div>
        )
    }
}
export default App;

