import React from "react";
import "./Input.css";

const InputElement = React.forwardRef((props, ref) => {
  const { indexValue, forbiddenKeys, moveFocusOver } = props;
  return (
    <input
      type="text"
      className="input-box"
      ref={ref}
      maxLength="1"
      id={"codeBox" + indexValue}
      onKeyDown={forbiddenKeys}
      onKeyUp={moveFocusOver}
    />
  );
});

export default InputElement;
