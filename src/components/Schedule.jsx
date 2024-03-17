import { useState } from 'react';
import usersImg from '../assets/users.svg';
import Meetings from './Meetings';

export default function Schedule() {
  const [count, setCount] = useState(0);

  // function handleCountChange(count) {
  //   setCount(count);
  // }
  return (
    <div className="right-bar">
      <div className="top-part">
        <img className="feather feather-users" src={usersImg} alt="" />
        <div className="count">{count}</div>
      </div>
      <div className="header">Schedule</div>
      <Meetings setCount={setCount} />
    </div>
  );
}
