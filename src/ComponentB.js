import React, { useContext } from 'react';
import { MyContext } from './MyContext';
const ComponentB = () => {
  const { data } = useContext(MyContext);

  return (
    <div>
      <p>Data in ComponentB: {data}</p>
    </div>
  );
};

export default ComponentB;
