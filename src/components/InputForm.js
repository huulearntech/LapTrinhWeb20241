import React, { memo } from "react";

const InputForm = ({ label, value, setValue, type }) => {
    return (
        <div>
            <label htmlFor="phone" className="text-s">{ label }</label>
            <input 
                type="text"
                id="phone"
                className="outline-none bg-blue-100 p-2 rounded-md w-full"
                value={ value }
                onChange={(e) => setValue(prev => ({ ...prev,[type]: e.target.value }))}
            />
        </div>
    )
}

export default memo(InputForm)