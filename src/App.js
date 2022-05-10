import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => { // This controls what gets render. Working like a router but still a spa
    if (currentPage === 'Home') { // This renders the home 'page'
      return <Home />;
    }
    if (currentPage === 'Projects') { // This renders the projects 'page'
      return <Projects />;
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
      <Footer />
    </div>
  );
}


export default App;