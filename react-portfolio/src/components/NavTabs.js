import React from 'react';

function NavTabs(props) {
  return (
    <header>
      <ul className="nav">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange('Home')} className={props.currentPage === 'Home' ? 'nav-link active' : 'nav-item'}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick={() => props.handlePageChange('Projects')} className={props.currentPage === 'Projects' ? 'nav-link active' : 'nav-item'}>
        Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange('Blog')} className={props.currentPage === 'Blog' ? 'nav-link active' : 'nav-item'}>
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange('Contact')} className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-item'}>
          Contact
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
