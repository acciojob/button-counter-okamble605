import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>Button clicked {count} times.</p>
      <button onClick={handleClick} style={{ padding: "10px", fontSize: "16px" }}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonCounter;
