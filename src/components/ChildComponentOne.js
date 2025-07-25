import React from 'react'

const ChildComponentOne = ({setSelectedOption}) => {
  return (
    <div className='componentOne'>
      <h2>ChildComponentOne</h2>
      <button onClick={() => {
        setSelectedOption('Option 1');
      }} >Option 1</button>
    </div>
  )
}

<<<<<<< HEAD
export default ChildComponentOne
=======
export default ChildComponentOne
>>>>>>> 689954dbbc3f043a12db5e39ad2426370f4373be
