import React from 'react';

function Nav() {
    return (
        <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            Daisy Lien 
          </a>
          <ul class="nav justify-content-end navtab">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
 
    );
}

export default Nav;