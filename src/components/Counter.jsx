import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            {/*<h1>{value}</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={value}*/}
            {/*    onChange={event => setValue(event.target.value)}*/}
            {/*/>*/}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;
