import React, { createContext, useState } from 'react'
 

const ToDoListContext = createContext()

const [toDo, setToDo] = useState({})

const putDoInli = (text) => {
  setToDo(text)
}


export default ToDoListContext;

