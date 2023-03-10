
import React,{useState} from 'react';

import Navbar from './components/navbar'
import Footer from './components/Footer'
import Routes from './components/routes'

function App() {
  const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
   <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen' >
  
   <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
   <Routes/>
   <Footer/>
    </div>
   </div>
  );
}

export default App;
