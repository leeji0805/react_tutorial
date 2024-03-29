import React, { useState } from 'react';

// 카운터 페이지 컴포넌트
const CounterPage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
    setTotal(total + 1);
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h2>전체 클릭 수: {total}</h2>
      <div>
        <p>버튼 1: {count1}</p>
        <button onClick={handleIncrement1}>버튼 1 증가</button>
      </div>
      <div>
        <p>버튼 2: {count2}</p>
        <button onClick={handleIncrement2}>버튼 2 증가</button>
      </div>
    </div>
  );
};

export default CounterPage;
