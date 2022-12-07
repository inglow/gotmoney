import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import Contact from './screen/Contact';
import Experience from './screen/Experience';
import Home from './screen/Home';

function App() {
  return (
    <Router>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
