import React from 'react'

/*Alert Component*/

export default function Alert(props) {

/*function to capitalize the first character of the alert type*/

  const capitalize = (word) => {
    const newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }

  return (

   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  
</div>

  )
}
