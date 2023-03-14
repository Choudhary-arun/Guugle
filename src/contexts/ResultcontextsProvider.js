import React ,{createContext, useContext, useState} from 'react';
import axios from 'axios';
const ResultContexts = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com';


export const ResultcontextsProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [IsLoading , setIsLoading] = useState('false');
    const [searchTerm , setSearchTerm] = useState('');

    const getResults = async (type) =>{
        setIsLoading(true);
        
        const options = {
            method: 'GET',
            url: 'https://google-search74.p.rapidapi.com/',
            params: {query: type, limit: '10', related_keywords: 'true'},
            headers: {
                'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log("hjhjbbkhb")
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        // const response = await fetch(`${baseUrl}${type}`,{
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb",
        //         "x-rapidapi-host": "google-search74.p.rapidapi.com"
        //       }
        //   });
        //   const data = await response.json();
        //   console.log(data);

    // setResults(data);
    setIsLoading(false);
    };

    return(
        <ResultContexts.Provider value={{getResults, results, searchTerm,setSearchTerm, IsLoading}}>{children}</ResultContexts.Provider>
    );
}

export const useResultContext = () => useContext(ResultContexts)