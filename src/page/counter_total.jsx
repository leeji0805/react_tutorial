import React, { useState } from 'react';
import "../css/count.css"
// CounterTotalPage 컴포넌트
const CounterTotalPage = () => {
  const initialCounts = Array(10).fill(0);
  const [counts, setCounts] = useState(initialCounts);
  const [total, setTotal] = useState(0);

  const handleIncrement = (index) => {
    // 모든 버튼의 카운터를 증가
    const newCounts = counts.map((count, i) => count + 1);
    setCounts(newCounts);
    // 전체 카운터 증가
    setTotal(total + 10);
  };

  return (
    <div>
      <h2>전체 클릭 수: {total}</h2>
      <div className="counter-container">
        {counts.map((count, index) => (
            <div key={index} >
            <p>버튼 {index + 1}: {count}</p>
            <button onClick={() => handleIncrement(index)}>버튼 {index + 1} 증가</button>
            </div>
        ))}
      </div>
      
    </div>
  );
};

export default CounterTotalPage;
