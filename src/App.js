import React, {useState} from 'react';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Resume from '../src/components/Resume';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Contact') {
      return <Contact/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
    return <About/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
    
  );
}

export default App;
