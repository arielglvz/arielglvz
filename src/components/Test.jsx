import React, { useState, useEffect } from 'react';

const Test = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const countDown = (n) => {
      if (n === 0) {
        return;
      } else {
        setCount(n - 1);
        setTimeout(() => countDown(n - 1), 1000); // Adjust the interval as needed
      }
    };

    countDown(10);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Test;
