import  React from 'react'
import  Input from './Input/Input'
import  Dropdown from './Dropdown/Dropdown'

const Elements = ( props ) => {
    switch(props.type){
      case 'TextField':
            return(
              <React.Fragment>
              <Input label={props.label}
                      value={props.value}
                      name = {props.name}
                      onChange={props.onChange}
                      />

              </React.Fragment>
            )
      case 'DropDown':
            return(
              <React.Fragment>
                <Dropdown
                        label={props.label}
                        value={props.value}
                        options = {props.options}
                        name = {props.name}
                        onChange={props.onChange}
                 />
              </React.Fragment>
            )
    }
}

export default Elements
