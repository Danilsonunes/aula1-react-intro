import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
     priority: "alta",
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onChange = this.onChange.bind(this)
  }
  
  onInputChange(event){
    this.setState({task: event.target.value });
    
  }
  onChange(event){
    this.setState({priority: event.target.value})
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.addTodo(e, this.state.task, this.state.priority)}>
        <input 
        type="text"
        value={this.state.task}
        onChange={this.onInputChange}
        placeholder="Adicione uma tarefa"
      />
      <select value={this.state.priority} onChange={this.onChange} >
        <option value="alta" >Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
        <button type="submit">+</button>
      </form>
    )
  }
  
}

export default Form;