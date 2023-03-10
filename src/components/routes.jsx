import React from 'react';
import {Route,  Routes} from 'react-router-dom'
import Results from './Results'
const routes = () => {
  return (
    <div className='p-4'>
      <Routes>
      
        <Route path="/" element="/search"/>
        <Route path="/search" element={<Results/>}/>
        <Route path="/images" element={<Results/>}/>
        <Route path="/videos" element={<Results/>}/>
        <Route path="/news" element={<Results/>}/>
      </Routes>
    </div>
  );
}

export default routes;
