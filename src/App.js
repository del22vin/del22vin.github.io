import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/pages/layout";
import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';

import PortfolioDetails from './components/pages/portfolioDetails';

import ScrollToTop from "./components/scrollToTop";

import { HashRouter as Router } from "react-router-dom";

function App() {
  return (

      <Router basename="/">
        <ScrollToTop />
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:name/:id" element={<PortfolioDetails />} />
          
        </Routes>
      </Router>

  );
}

export default App;
