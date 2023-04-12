import React, {useState} from 'react'
import {Container, FormGroup, Button, FormLabel, FormControl} from 'react-bootstrap'


import Axios from 'axios'
import AccountList from './AccountList'

export default function AccountCreateForm(props) {
    const [newAccount, setNewAccount] = useState({})
    const [displayList, setDisplayList] = useState(false)

    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const account = { ...newAccount }
        account[attributeToChange] = newValue
        console.log(account)
        setNewAccount(account)
    }
    const addAccount = (account) => {
        Axios.post("/account/add", account,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then((response) => {
                console.log('account', account);
                console.log("Account Added Successfully!!!!")
                setDisplayList(true)
            })
            .catch((err) => {
                console.log("Error Adding Account")
                console.log(err)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addAccount(newAccount)
        console.log(newAccount);
    }

  return (
    <div>
        <h1>Create Account</h1>
        <Container>
            <FormGroup>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormLabel>UserName</FormLabel>
                        <FormControl type="text" name="username" onChange={handleChange}></FormControl>
                    </div>
                    <div>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type="text" name="emailAddress" onChange={handleChange}></FormControl>
                    </div>
                    <div>
                        <FormLabel>password</FormLabel>
                        <FormControl type="text" name="password" onChange={handleChange}></FormControl>
                    </div>
                    <div>
                        <FormLabel>website</FormLabel>
                        <FormControl type="text" name="website" onChange={handleChange}></FormControl>
                    </div>
                    <div>
                        <FormControl type="submit" value="Add Account"></FormControl>
                    </div>
                 </form>
            </FormGroup> 
        </Container>
    </div>
  )

   
}