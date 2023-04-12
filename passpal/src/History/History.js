import React from 'react'
import { Button,} from 'react-bootstrap'


export default function History(props) {
    return (
        <>
            <td>{props.website}</td>
            <td>{props.username}</td>
            <td>{props.emailAddress}</td>
            <td>{props.password}</td>
            <td><Button onClick={() => { props.deleteHistory(props._id) }}>Delete</Button></td>
        </>
    )
}
