import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.show && <div className={`alert alert-${props.type} alert-dismissible fade show`} style={{height:'50px', lineHeight:'15px'}} role="alert">
        <strong>{props.type=== 'danger'?'Error':props.type}! </strong>{props.msg} 
      </div>}
    </div>
  
  )
}
