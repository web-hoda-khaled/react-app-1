import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import "bootstrap/dist/js/bootstrap.bundle"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portflio'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


const router = createBrowserRouter([
{path:"", element:<App /> , children:[
   {path: "home" , element: <Home />},
   {path: "portfolio" , element:<Portfolio />},
   {path: "about" , element:<About />},
   {path: "contact" , element:<Contact />},
   {path: "*" , element:<h2>Error</h2>},
]},
]
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider  router={router}/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
