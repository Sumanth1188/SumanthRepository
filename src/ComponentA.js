import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const ComponentA = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <p>Data in ComponentA: {data}</p>
      <button onClick={() => setData('5 in A')}>Update Data</button>
    </div>
  );
};

export default ComponentA;