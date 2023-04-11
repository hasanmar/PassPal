import React from 'react'
import { Button,Table } from 'react-bootstrap'

export default function Account(props) {
  return (
    <>
      <td>{props.username}</td>
      <td>{props.emailAddress}</td>
      <td>{props.password}</td>
      <td>{props.website}</td>
      <td><Button onClick={()=> {props.editView(props._id)}}>Edit</Button>
      <Button onClick={()=> {props.deleteAccount(props._id)}}>Delete</Button></td>
    </>
  )
}