import React from 'react';

function Nav({currentPage, handlePageChange}) {
    return (
        <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
            Daisy Lien 
          </a>
          <ul class="nav justify-content-end navtab">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
 
    );
}

export default Nav;