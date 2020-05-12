import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Contact from './Contact.js';
import Description from './Description.js';
import NavBar from './NavBar.js';
import Menu from './Menu.js';
import MenuItem from './MenuItem.js'
import pizzaData from './pizzaData.js'

const items= {
    name: String,
    price: Number,
    description: String,
    image: URL,
}


ReactDOM.render(
    <div>
        <NavBar/>
        <App/>
        <Description/>
        <Contact/>
        <Menu/>
        <MenuItem name ={pizzaData.name} />
    </div>,
        document.getElementById('root'));
registerServiceWorker();
