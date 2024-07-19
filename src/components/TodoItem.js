import React from 'react';

function TodoItem({ index, todo, checkedItems, toggleCheckbox }) {

  return (
    <div className='flex items-center mb-2'>
      <input
        type="checkbox"
        checked={checkedItems}
        onChange={() => toggleCheckbox(index)} 
        className='mr-2'
      />
      <li className='list-none'>{todo}</li>
    </div>
  );
}

export default TodoItem;
