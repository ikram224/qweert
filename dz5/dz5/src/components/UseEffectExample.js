import React, { useState, useEffect } from 'react';


function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);//[]
    return (
        <div className="use-effect-example">
            <h2>UseEffect Example</h2>
            <p>Count: {count}</p>
        </div>

    );
}

export default UseEffectExample;
