import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {editTitle: props.title}
  }

  onDelete = () => {
    const {deleteTodoList, id} = this.props
    deleteTodoList(id)
  }

  onChangeInput = e => {
    this.setState({editTitle: e.target.value})
  }

  render() {
    const {
      title,
      onChangeCheck,
      onChangeEdit,
      onChangeSave,
      isEdit,
      isCheck,
      id,
    } = this.props

    const {editTitle} = this.state
    return (
      <li>
        <div className="check-input-container">
          <input
            type="checkbox"
            onChange={e => onChangeCheck(id, e)}
            checked={isCheck}
          />
          {isEdit ? (
            <input
              type="text"
              onChange={this.onChangeInput}
              value={editTitle}
              className="edit-input"
            />
          ) : (
            <p style={{textDecoration: isCheck ? 'line-through' : null}}>
              {title}
            </p>
          )}
        </div>
        <div className="btn-container">
          {isEdit ? (
            <button onClick={() => onChangeSave(id, editTitle)} type="button">
              Save
            </button>
          ) : (
            <button onClick={() => onChangeEdit(id)} type="button">
              Edit
            </button>
          )}

          <button onClick={this.onDelete} type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
