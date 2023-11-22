// import { useState } from 'react'

// const useToggle = () => {
//     // const [toggle, setToggle] = useState(false)

//     // function handleToggle() {
//     //     setToggle(!toggle)
//     // }

// //   return  [toggle,handleToggle]
  
// }

// export default useToggle


import React, { useState } from 'react'

const Usetoggle = () => {

    const [modify, setModify] = useState(0)

   function increaseCount() {
    setModify(modify=>modify+1)
   } 
   function decreaseCount() {
    setModify(modify=>modify-1)
   } 


  return [modify,increaseCount,decreaseCount]
  
}

export default Usetoggle
