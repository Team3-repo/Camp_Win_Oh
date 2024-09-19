import React, { useState } from 'react';

// 定義三個不同的 component
const ComponentA = () => <div>這是 Component A</div>;
const ComponentB = () => <div>這是 Component B</div>;
const ComponentC = () => <div>這是 Component C</div>;

const App = () => {
  // 使用 useState 管理當前顯示的 component
  const [currentComponent, setCurrentComponent] = useState('A');

  // 根據 currentComponent 顯示對應的 component
  const renderComponent = () => {
    switch (currentComponent) {
      case 'A':
        return <ComponentA />;
      case 'B':
        return <ComponentB />;
      case 'C':
        return <ComponentC />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setCurrentComponent('A')}>顯示 Component A</button>
      <button onClick={() => setCurrentComponent('B')}>顯示 Component B</button>
      <button onClick={() => setCurrentComponent('C')}>顯示 Component C</button>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default App;
