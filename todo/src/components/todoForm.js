import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask, toggleTask } from '../actions'


class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state={
      todoInput: '',
    }
  }
  
  toggleTask = id => {
    this.props.toggleTask(id)
  }
  addTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.todoInput);
    this.setState({
      todoInput: ''
    })
  }
  handleInputChange = e => {
    console.log('Input value',e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: "#cdcdcd",
      textDecoration: "line-through"
  }
    return (
      <div className='container'>
        <h3 className='header'>Path to World Domination</h3>
        <div className='todoList'>
        {this.props.todoStateFromProps.map(todo => <p style={todo.completed ? completedStyle : null} onClick={() => this.toggleTask(todo.id) }>{todo.value}</p>)}
        </div>
        <form className='todoForm' onSubmit={this.addTask}>
          <input 
            type="text" 
            name="todoInput" 
            value={this.state.todoInput} 
            onChange={this.handleInputChange}
            required
          />
          <button>Add Task</button>
        </form>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoStateFromProps: state.todos, 
  }
}
export default connect(mapStateToProps, {addTask, toggleTask})(TodoForm)