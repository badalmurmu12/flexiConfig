import React from 'react';
import Flexcon from './flexc'



class Flexi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(event){
    let newobj = this.state.data
    newobj[event.target.name] = event.target.value
    this.setState({data : newobj})

  }

  render(){
     return(
      <div className='inputform' >
          <form onSubmit={(event) => this.props.onSubmit(event,this.state.data)}>
	           <Flexcon items={this.props.config.items} value={this.state.data} updateInput={this.updateInput} />
             <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }


}

export default Flexi
