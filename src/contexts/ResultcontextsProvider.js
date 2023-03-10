import React ,{createContext, useContext, useState} from 'react';

const ResultContexts = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com';


export const ResultcontextsProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [IsLoading , setIsLoading] = useState('false');
    const [searchTerm , setSearchTerm] = useState('');

    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
              }
    //         headers: {
    //             'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    // 'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
    
    //         }
          });
          const data = await response.json();
          console.log(data);

    setResults(data);
    setIsLoading(false);
    };

    return(
        <ResultContexts.Provider value={{getResults, results, searchTerm,setSearchTerm, IsLoading}}>{children}</ResultContexts.Provider>
    );
}

export const useResultContext = () => useContext(ResultContexts)