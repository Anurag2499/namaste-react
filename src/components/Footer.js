import { useState } from 'react';

const Footer = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Footer</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Footer;
