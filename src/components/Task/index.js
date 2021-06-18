import React from 'react';

const Task = ({todo, remove}) =>{
  
  // if (todo.pri === 'alta'){

  
  return(
    <>
    <h1>prioridad baja</h1>
    <li>
       `{todo.text}"=================="{todo.pri}`
      <button onClick={(e)=>remove(e, todo.text)}>x</button>
    </li>
    </>
  )
  
}
// else{
//   return(
//     <li>nada</li>
//   )
// }
// }

export default Task;