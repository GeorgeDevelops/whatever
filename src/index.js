import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Movie from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Notfound from './components/not-found';
import MovieDetails from './components/movieDetails';
import Login from './components/login';
import Register from './components/register';
import MovieMaker from './components/moviemaker';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <main className='container'>
    <Routes>
        <Route path='/movies/new' exact element={<MovieMaker />} />
        <Route path='/signup'element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/rentals' element={<Rentals />} />
        <Route path='/movies/:movieId' element={<MovieMaker />}/>
        <Route path='/not-found' element={<Notfound />}/>
        <Route path='*' element={<Notfound />}/>
    </Routes>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
