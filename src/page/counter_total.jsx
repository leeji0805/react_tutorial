import React, { useState } from 'react';
import "../css/count.css"
// CounterTotalPage 컴포넌트// CounterTotalPage 컴포넌트
const CounterTotalPage = () => {
    const initialCounts = Array(10).fill(0);
    const [counts, setCounts] = useState(initialCounts);
  
    const handleIncrement = (clickedIndex) => {
      const newCounts = counts.map((count, index) => 
        index === clickedIndex ? count + 2 : count + 1
      );
      setCounts(newCounts);
    };
  
    // 모든 카운트의 합을 계산하여 총합을 반환하는 함수
    const getTotalCount = () => {
      return counts.reduce((sum, current) => sum + current, 0);
    };
  
    return (
      <div>
        <h2>전체 클릭 수: {getTotalCount()}</h2>
        <div className="counter-container">
          {counts.map((count, index) => (
            <div key={index}>
              <p>버튼 {index + 1}: {count}</p>
              <button onClick={() => handleIncrement(index)}>버튼 {index + 1} 증가</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default CounterTotalPage;
