import React from 'react';

function RemoveCheckedButton({ todoList, setTodoList, checkedItems, setCheckedItems }) {  // destructuring props

  const removeCheckedItems = () => {
    // filter out checked items
    const newTodoList = todoList.filter((_, index) => !checkedItems[index]);
    const newCheckedItems = {};
    // reset the checked status for the new todo list
    newTodoList.forEach((_, index) => {
      newCheckedItems[index] = false;
    });
    // update state with new lists
    setTodoList(newTodoList);
    setCheckedItems(newCheckedItems);
  }

  return (
    <div className='mt-4'>
      <button
        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
        onClick={removeCheckedItems}
      >
        Remove Checked Todos
      </button>
    </div>
  );
}

export default RemoveCheckedButton;
