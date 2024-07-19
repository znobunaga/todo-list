import React, { useState } from 'react';
import AddTodoList from './AddTodoList';
import TodoItem from './TodoItem';
import RemoveCheckedButton from './RemoveCheckedButton';

function TodoList() {
  // state to handle the list of todos
  const [todoList, setTodoList] = useState([]);
  // state to handle the checked status of each todo
  const [checkedItems, setCheckedItems] = useState({});

  // function to add a new todo
  const addTodo = (value) => {
    setTodoList([...todoList, value]);  // append the new todo
    setCheckedItems({...checkedItems, [todoList.length]: false});  // check new todo is not checked
  }

  //function to toggle the checked status of a todo
  const toggleCheckbox = (index) => {
    const newCheckedItems = {...checkedItems};
    newCheckedItems[index] = !newCheckedItems[index];  // toggle the value
    setCheckedItems(newCheckedItems);
  }

  return (
    <>
      <div>
        <AddTodoList addTodo={addTodo} />
      </div>
      <div className='mt-4'>
        <ol>
          {todoList.map((value, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={value}
              checkedItems={!!checkedItems[index]}  // convert to boolean
              toggleCheckbox={toggleCheckbox}  
            />
          ))}
        </ol>
      </div>
      <div>
        <RemoveCheckedButton
          todoList={todoList}
          setTodoList={setTodoList}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </div>
    </>
  );
}

export default TodoList;
