import React from 'react';
import Task from '../Task';

const List = ({todos, remove}) =>{
  return(
    <ol>
      {todos.map((todo, index) =>{
        return(<Task todo={todo} remove={remove} key={index}></Task>)
      })}
    </ol>
  )
};

export default List;