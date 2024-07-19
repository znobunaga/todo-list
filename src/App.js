import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-blue-100'>
      <div className='text-center text-5xl mb-5 text-blue-800 font-bold'>Todo List App</div>
      <TodoList />
    </div>
  );
}

export default App;
