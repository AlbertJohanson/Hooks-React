/* eslint-disable react/button-has-type */
import React, {useState} from 'react';
import '../../styles/components/App.css';

const CounterApp = () => {

    const [{counter1, counter2}, setcount] = useState({ 
        counter1: 10,
        counter2: 20
    })

        
    const handleCounter = () => {
        setcount({
            counter1: counter1 + 1,
            counter2: counter2 + 2
        })
    }

  return (
    <div>
      <h1>
        Counter
        <br />
        {counter1}
      </h1>
      <h1>
        Counter
        <br />
        {counter2}
      </h1>
      <button className="btn btn-primary" onClick={handleCounter}>+1</button>
    </div>
  );
};

export default CounterApp;
