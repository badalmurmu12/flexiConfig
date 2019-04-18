import React from 'react'
import './dropdown.css'


class Select extends React.Component {
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
      <div className='input-group' >
      <label>{this.props.label  || ''}</label>
        <select className='select-group' onChange={this.handleInputChange} name = {this.props.name || ''} label={this.props.lebel || ''} >
            <option value="" disabled selected>Choose option</option>
              {this.props.options  ? this.props.options.map((value, index) =>  <option key={index} value= {value}> {value} </option>) : ''}
        </select>
      </div>
    )
  }
}

export default Select
