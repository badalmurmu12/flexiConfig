import React from 'react'
import Elements from './BasicElement/Elements'

const Flexcon = (props) =>{
  if(props.items == null || props.items.length==0) {
    return null
  }
  return props.items.map((item,index) => {
    return (
      <div key={index}>
        <Elements label={item.label} type={item.type} value= {'' || props.value[item.name] } options={item.values}  name={item.name} onChange= {props.updateInput} />
          {item.items && <Flexcon items={item.items} value={props.value} updateInput={props.updateInput}/>}
        </div>
  )
  })
}
export default Flexcon
