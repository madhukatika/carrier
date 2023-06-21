// import {useState} from 'react'
// import allFiles from '../json_data/merged_file.json';



// const Search_data = () => {
//   const [searchTerm, setSearchTerm] = useState('');
 

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFormSubmit = async(e) => {
//     e.preventDefault();

  
    
//     console.log(allFiles)
//     console.log('Search term:', searchTerm);
//     setSearchTerm('');
//   };


      
//   return (
//     <div>
//     <form className="search-bar" onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Search</button>
//     </form>
   
//     </div>
//   );
//   }
// export default Search_data;

import React, { useState, useEffect } from 'react';
import mergeData from '../../json_data/merged_file.json';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    // Perform initial search on component mount
    performSearch(searchTerm);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    performSearch(searchTerm);
  };

  const performSearch = (term) => {
    // Perform search on the imported JSON data
    const results = mergeData.filter((item) => {
      if(item.hasOwnProperty("thermostatPacket")){
        console.log('hello')
        const itemString = JSON.stringify(item).toLowerCase();
        return itemString.includes(term.toLowerCase());
}
    });
    console.log(results)
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <tr>
      <th>Date
        </th>
      <th>Time
        </th>
      <th>product
        </th>
      <th>version
        </th>
      <th>id
        </th>
      <th>hvacMode
        </th>
      <th>deadband10xF
        </th>
      <th>outdoorTempLockout10xF
        </th>
      <th>programMode
        </th>
      <th>fanMode
        </th>
      <th>numHeatStages
        </th>
        <th>numCompressorStages
        </th>
      <th>numHeatStages
        </th>
      <th>hasHeatpump
        </th>
        <th>smartSensorCnt
        </th>
      <th>outdoorTemperature10xF
        </th>
      <th>indoorTemperature10xF
        </th>
      <th>outdoorHumidityPer
        </th>
      <th>indoorHumidityPer
        </th>
        </tr>
        {searchResults.map((item,index) => (
                // <div key={index}>{JSON.stringify(item.thermostatPacket)}</div>
          <tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>

          </tr>

          

          


         ) )}
         </table>

    </div>
  );
};

export default SearchComponent;





