import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/pages/layout";
import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';

import PortfolioDetails from './components/pages/portfolioDetails';

function App() {
  return (

      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:name/:id" element={<PortfolioDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
