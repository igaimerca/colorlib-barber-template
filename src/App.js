import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import About from "./pages/About/About";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import "swiper/css/bundle";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" exact element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Service />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
