import { useState } from 'react';

const User = (props) => {
  const [count] = useState(1);
  const { name } = props;
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @anurag015</h4>
    </div>
  );
};

export default User;
