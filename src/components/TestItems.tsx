"use client";

import { useState } from "react";
import TestModal from "./TestModal";

const TestItems = ({ item }: any) => {
  const [showModal, setshowModal] = useState(false);
  const handleClick = () => {
    setshowModal(!showModal);
  };
  return (
    <div key={item.id}>
      <div>{item.name}</div>
      <div>{item.role}</div>
      <button onClick={handleClick}>Show</button>
      {showModal && (
        <TestModal
          onClose={handleClick}
          item={item}
        />
      )}
    </div>
  );
};

export default TestItems;
