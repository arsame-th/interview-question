import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ categories, setCategories ] = useState()
  const [ initial, setInitial ] = useState([])
  useEffect(() => {
    // Update the document title using the browser API
     if(!categories){getCategories();}
  });

  const getCategories = async () => {
    let res = await fetch('https://api.publicapis.org/categories')
    let categories = await res.json()
    setCategories(categories)
    setInitial(categories)
  }

  const onInputChange = async () => {
    var search_input = document.getElementById('search').value
    if(search_input === "\\" || !search_input){ search_input = null}
    var regex = search_input ? new RegExp("^(" + search_input.toLowerCase() + ")", "g") : null
    var filtered_categories = [];
    initial.forEach(category => {
      let result = category.toLowerCase().search(regex)
      if(result >= 0 ){console.log('found'); filtered_categories.push(category);}
    });
    console.log(filtered_categories.length)

    if(!search_input){
      setCategories(initial)
    } else {
      setCategories(filtered_categories)
    }
    return false;
  }

  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            <th>Categories search
              <input type="text" 
              id="search" 
              style={{marginLeft: '5px'}}
              pattern="[a-zA-Z'-'\s]*"
              onChange={onInputChange} 
              /></th>
          </tr>
        </thead>
        <tbody>
        {
         (!categories) ? (<tr><td><p>loading...</p></td></tr>) :
            (categories.length === 0) ? (<tr><td><p>not found</p></td></tr>) :
            (categories.map((category, index) =>  
            <tr key={index} index={index}>
              <td>{category}</td>
            </tr>
          )) 
        } 
        </tbody>
      </table>
    </div>
  );
}

export default App;
