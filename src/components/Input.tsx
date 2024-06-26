import * as React from "react";
import { useState } from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labeltext:String,
    labelclassName?:String

}

function Input({ labeltext,labelclassName,...inputProps }: CustomInputProps): JSX.Element {
  const [focused, setFocused] = useState(false);


  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFocused(false);
    }
  };

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
  };
  
  const inputLabelStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0rem',
    transition: 'top 0.3s ease, font-size 0.3s ease'
  };
  
  const labelActiveStyle: React.CSSProperties = {
    top: '-1.5rem'
  };

  return (
    <div
      style={inputContainerStyle}
      className={`input-container ${focused ? "input-focused" : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <label className={`input-label ${labelclassName} ${focused || inputProps.value ? "label-active" : ""}`} style={{
        ...inputLabelStyle,
        ...(focused ? labelActiveStyle : {})
      }}>
        {labeltext}
      </label>
      <input
        type="text"
        {...inputProps}
      />
    </div>
  );
}

export { Input };
