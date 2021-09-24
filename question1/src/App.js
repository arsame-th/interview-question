import './App.css';
import React, {useEffect} from 'react';

function App() {
  
  useEffect(() => {
    // Update the document title using the browser API
    onSelectChange()
  });
  const onSelectChange = () =>{
    let selector_val = document.getElementById('selector').value
    let input_val = document.getElementById('input_number').value
    let result_val = document.getElementById('answer')

    console.log(selector_val, input_val)
    if(selector_val === 'isPrime'){
      if(input_val){
        let result = isPrime(input_val)
        console.log('result:', result)
        result_val.innerHTML = result
      }  
    }else if (selector_val === 'isFibonacci'){
      if(input_val){
        let result = isFibonacci(input_val)
        console.log('result:', result)
        result_val.innerHTML = result
      }
    }
  }

  const isPrime = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
  }

  // Returns true if n is a Fibinacci Number, else false
  function isFibonacci(n) {

    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5 * n * n + 4) ||
      isPerfectSquare(5 * n * n - 4);
  }

  return (
    <div className="App">
      <div className="flex-container">
        <div className="input-container">
          <input type="number" id="input_number" min='0' onKeyUp={onSelectChange}/>
        </div>
        <div className="option-container" >
          <select name="selector" id="selector" onChange={onSelectChange}>
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="answer-container">
          <p id="answer"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
