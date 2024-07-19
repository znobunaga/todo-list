import React, { useState } from 'react';

function AddTodoList({ addTodo }) {
  const [inputValue, setInputValue] = useState('');  // state for the input value

  // update inputValue state on change
  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  }

  // handle form submission
  const inputValueForAddTodo = (event) => {
    event.preventDefault();  // prevent page refresh
    if(inputValue.trim()) {  // check for non-empty input
      addTodo(inputValue);
      setInputValue('');  // reset input field
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={inputValueForAddTodo} className='flex flex-col items-center'>
        <input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          placeholder='Please enter a todo'
          className='border border-blue-500 rounded p-2 mb-2 w-64'
        />
        <button
          type="submit"
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoList;
