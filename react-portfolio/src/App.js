import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

const App = () => {
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


export default App;