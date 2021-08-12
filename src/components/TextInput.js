import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={(e) => textChange(e)} />
      {text}
    </div>
  );
};

export default TextInput;
