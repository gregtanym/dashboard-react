import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  const { handleClose } = useStateContext()
  return (
    <button 
      type='button'
      // if name of field is same as name of css property then can just pass the variable name into the object
      style={{ backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={handleClose}
    >
      {text}
    </button>
  )
}

export default Button

// import React from 'react';

// import { useStateContext } from '../contexts/ContextProvider';

// const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
//   const { setIsClicked, initialState } = useStateContext();

//   return (
//     <button
//       type="button"
//       onClick={() => setIsClicked(initialState)}
//       style={{ backgroundColor: bgColor, color, borderRadius }}
//       className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
//     >
//       {icon} {text}
//     </button>
//   );
// };

// export default Button;