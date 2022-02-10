import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Home from './routes/Home';
import AboutTeam from './routes/AboutTeam';
import Articles from './routes/Articles';
import Article from './routes/Article';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} >
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:articleId" element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
