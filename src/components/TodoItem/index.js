import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  onDelete = () => {
    const {deleteTodoList, id} = this.props
    deleteTodoList(id)
  }

  render() {
    const {title} = this.props

    return (
      <li>
        <p>{title}</p>
        <button onClick={this.onDelete} type="button">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
