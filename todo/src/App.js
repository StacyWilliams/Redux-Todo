import React from 'react';

import TodoForm from './components/todoForm';



class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="todoList">
      <TodoForm />
      </div>
    ); 
  }
}

export default App;