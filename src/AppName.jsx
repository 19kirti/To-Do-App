import React from 'react'

/*Heading Component*/

export default function AppName(props) {
  return (
    <h1 style={{color:props.mode==='light'? 'black' : 'white'}}>{props.heading}</h1>
  )
}
