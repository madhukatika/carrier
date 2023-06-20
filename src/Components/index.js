import {useState} from 'react'
import allFiles from '../json_data/merged_file.json';



const Search_data = () => {
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();

  
    
    console.log(allFiles)
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };


      
  return (
    <div>
    <form className="search-bar" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
   
    </div>
  );
  }
export default Search_data;


// import { useState } from 'react';
// import allFiles from '../json_data/merged_file.json';

// const Search_data = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const filteredFiles = allFiles.map((file) => {
//       if (file && file.name && searchTerm) {
//         return file.name.toLowerCase().includes(searchTerm.toLowerCase());
//       }
//       return;
//     });
//     console.log("all  n ",filteredFiles)
//     setFilteredData(filteredFiles);
//     setSearchTerm('');
//   };
// console.log('datv : ', filteredData[0])
//   return (
//     <div>
//       <form className="search-bar" onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
      
//       {filteredData.length > 0 ? (
//         <ul>
//           {allFiles.map((file) => (
//             <li key={file.uid}>{file.plcPacket}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default Search_data;
// import { useState } from 'react';
// import allFiles from '../json_data/merged_file.json';

// const Search_data = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Search term:', searchTerm);

//     // Find the first item with a matching key
//     const foundItem = allFiles.find((item) => item.hasOwnProperty(searchTerm));

//     setSearchResult(foundItem ? foundItem[searchTerm] : null);
//     setSearchTerm('');
//   };

//   return (
//     <div>
//       <form className="search-bar" onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {searchResult !== null ? (
//         <div>
//           <h2>Search Result:</h2>
//           <p>{searchResult}</p>
//         </div>
//       ) : (
//         <p>No result found.</p>
//       )}
//     </div>
//   );
// };

// export default Search_data;

