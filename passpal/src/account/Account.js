import React from 'react'

export default function Account(props) {
  return (
    <>
      <td>{props.username}</td>
      <td>{props.emailAddress}</td>
      <td>{props.password}</td>
      <td>{props.website}</td>
      <td><button onClick={()=> {props.editView(props._id)}}>Edit</button></td>
      <td><button onClick={()=> {props.deleteAccount(props._id)}}>Delete</button></td>
    </>
  )
}