import React from 'react'
import './input.css'

class Input extends React.Component {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    if(this.props.onChange) {
      this.props.onChange(e)
    }
  }


  render() {
    return(
      <div className='input-group'  >
        <label>{this.props.label}</label>
        <input type={this.props.type || 'text'}
            value={this.props.value || ''}
            name={this.props.name || ''}
            onChange={this.handleInputChange}
            />
        <div className='input-line'></div>
      </div>
    )
  }
}

export default Input
