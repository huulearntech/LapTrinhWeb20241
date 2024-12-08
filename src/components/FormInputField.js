// src/components/InputField.js
import React, { useState } from 'react';

const InputField = ({ label, type, name, value, onChange, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex flex-col flex-grow">
      <label
        htmlFor={name}
        className={`absolute left-3 transition-all duration-200 ${disabled ? 'text-black text-sm -top-2.5 bg-white px-2' : (isFocused || value ? 'text-sm -top-2.5 text-blue-500 bg-white px-2' : 'top-3 text-gray-600')}`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border rounded text-black focus:outline-none focus:ring-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'}`}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;