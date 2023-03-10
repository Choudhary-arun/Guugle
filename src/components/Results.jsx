import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultcontextsProvider';
import Loading from './Loading';
const Results = () => {

  const  {results,IsLoading,getResults,searchTerm} = useResultContext();
  const location = useLocation();

  useEffect(() => {
        //  getResults('/search/q= Javascript Mastery &num=5')
         getResults('music')
  },[]);
 
  if(IsLoading) return <Loading/>
 switch (location.pathname){
  case '/search':
    return (
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
      {results?. results?.map(({link,title},index)=>(
      <div key={index} className='md:w-2/5 w-full'>
        <a href={link} target='_blank' rel ="noreferrer">
          <p className='text-sm'>
            {link.length > 30 ? link.sunstring(0,30) : link}
          </p>
          <p className='text-lg hover:underline drak :text-blue-300 text-blue-700'>{title}</p>
        </a>
      </div>
      ))}
      </div>
    )
  // case '/search':
  //   return 'SERACH';
  case '/images':
    return 'images';
  case '/videos':
    return 'videos';
  case '/news':
    return 'news';

    default:
         return "ERROR!";
 }
}

export default Results;
