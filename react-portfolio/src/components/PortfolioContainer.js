import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => { // This controls what gets render. Working like a router but still a spa
    if (currentPage === 'Home') { // This renders the home 'page'
      return <Home />;
    }
    if (currentPage === 'About') { // This renders the about 'page'
      return <About />;
    }
    if (currentPage === 'Blog') { // This renders the blog 'page'
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
