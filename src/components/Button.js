import React, { memo } from "react";



const Button = ( {text, textColor, bgColor, onClick} ) => {
    return (
        <button 
            type="button"
            className={`py-2 px-4 ${textColor} ${bgColor} outline-none rounded-md hover:underline `}
            onClick={onClick}
        > 
            {text}
        </button>
    )
}

export default memo(Button)