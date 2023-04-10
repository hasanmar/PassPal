import React from 'react'

export default function History(props) {
    return (
        <>
            <td>{props.website}</td>
            <td>{props.username}</td>
            <td>{props.emailAddress}</td>
            <td>{props.password}</td>
            <td><button onClick={() => { props.deleteHistory(props._id) }}>Delete</button></td>
        </>
    )
}
