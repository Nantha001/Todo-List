import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const todosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosList: todosList}

  deleteTodoList = id => {
    const {initialTodosList} = this.state
    const deleteTodo = initialTodosList.filter(each => each.id !== id)

    this.setState({initialTodosList: deleteTodo})
  }

  render() {
    const {initialTodosList} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {initialTodosList.map(each => (
              <TodoItem
                key={each.id}
                id={each.id}
                deleteTodoList={this.deleteTodoList}
                title={each.title}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
