import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import History from './History'
import {Container, Form, Button, Table} from 'react-bootstrap'


export default function HistoryList() {

    const [history, setHistory] = useState([])
    const [currentHistory, setCurrentHistory] = useState({});

    useEffect(() => {
        loadHistoryList()
    }, [])

    const loadHistoryList = () => {
        Axios.get("history")
            .then((response) => {
                console.log(response)
                // State to store the data
                setHistory(response.data.accounts)
                console.log('history', response);
            })
            .catch((err) => {
                console.log("Error Retreiving account history")
                console.log(err)
            })
    }

    const deleteHistory = (id) => {
        Axios.delete(`history/delete?id=${id}`,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(res => {
                console.log("Record Delete Successfully!!!")
                console.log(res)
                loadHistoryList();
            })
            .catch(err => {
                console.log("Error Deleting account entry")
                console.log(err)
            })
    }

    const allHistory = history.map((history, index) => (
        <tr key={index}>
            <History {...history} deleteHistory={deleteHistory} />
        </tr>
    ))

    return (
    
        <div>
            <h1>Old account details</h1>
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>website</th>
                            <th>username</th>
                            <th>email address</th>
                            <th>password</th>
                            <td>Action</td>
                        </tr>
                        {allHistory}
                    </tbody>
                </Table>
            </div>
        </div>
    )

}
