import {Component} from 'react'
import './index.css'
import {nanoid} from 'nanoid'
import TodoItem from '../TodoItem'

const initialTodosList = [
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
  state = {
    todosList: initialTodosList.map(each => ({
      ...each,
      isEdit: false,
      isCheck: false,
    })),
    userInput: '',
  }

  deleteTodoList = id => {
    const {todosList} = this.state
    const deleteTodo = todosList.filter(each => each.id !== id)

    this.setState({todosList: deleteTodo})
  }

  onChangeInput = e => {
    this.setState({userInput: e.target.value})
  }

  onChangeEdit = id => {
    this.setState(pre => ({
      todosList: pre.todosList.map(each =>
        each.id === id ? {...each, isEdit: true} : each,
      ),
    }))
  }

  onChangeSave = (id, value) => {
    this.setState(pre => ({
      todosList: pre.todosList.map(each =>
        each.id === id ? {...each, title: value, isEdit: false} : each,
      ),
    }))
  }

  onChangeCheck = (id, e) => {
    const {checked} = e.target
    this.setState(pre => ({
      todosList: pre.todosList.map(each =>
        each.id === id ? {...each, isCheck: checked} : each,
      ),
    }))
  }

  onSubmitInput = e => {
    e.preventDefault()
    const {userInput} = this.state
    const splitUserInput = userInput.split(' ')
    const numberTodo = parseInt(splitUserInput[splitUserInput.length - 1])
    const task = splitUserInput.slice(0, -1).join(' ')
    if (task && typeof numberTodo === 'number' && numberTodo > 0) {
      const newObject = Array.from({length: numberTodo}, () => ({
        id: nanoid(),
        title: task,
        isEdit: false,
        isCheck: false,
      }))
      this.setState(pre => ({
        todosList: [...pre.todosList, ...newObject],
        userInput: '',
      }))
    } else {
      this.setState(pre => ({
        todosList: [
          ...pre.todosList,
          {id: nanoid(), title: userInput, isEdit: false, isCheck: false},
        ],
        userInput: '',
      }))
    }
  }

  render() {
    const {todosList, userInput} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <form onSubmit={this.onSubmitInput}>
            <input
              type="text"
              placeholder="type..."
              onChange={this.onChangeInput}
              value={userInput}
              className="form-input"
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {todosList.map(each => (
              <TodoItem
                key={each.id}
                id={each.id}
                deleteTodoList={this.deleteTodoList}
                title={each.title}
                isEdit={each.isEdit}
                isCheck={each.isCheck}
                onChangeCheck={this.onChangeCheck}
                onChangeEdit={this.onChangeEdit}
                onChangeSave={this.onChangeSave}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
