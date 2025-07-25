import React from 'react'

const ChildComponentTwo = ({setSelectedOption}) => {
  return (
    <div className='componentTwo'>
      <h2>ChildComponentTwo</h2> 
      <button onClick={() => {
        setSelectedOption('Option 2');
      }} >Option 2</button>
    </div>
  )
}

<<<<<<< HEAD
export default ChildComponentTwo
=======
export default ChildComponentTwo    
>>>>>>> 689954dbbc3f043a12db5e39ad2426370f4373be
