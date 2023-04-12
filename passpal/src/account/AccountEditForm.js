import React, { useState, useEffect } from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import {Container, Form, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'


export default function AccountEditForm(props) {
  const [newAccount, setNewAccount] = useState({})
  const [password, setPassword] = useState("");


  useEffect(() => {
    setNewAccount(props.account)
    console.log('set', newAccount);
  }, [])

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const account = { ...newAccount }
    account[attributeToChange] = newValue
    console.log(account)
    setNewAccount(account)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('new', newAccount);
    props.editAccount(newAccount)
  }
  const savePassword = (event) => {
    setPassword(event.target.value)
  }
  function generateStrongPassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let generatedPassword = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(generatedPassword)
    console.log("pass", password);
    return generatedPassword;
  }

  const checkPass = (password) => {
    let strength = 0;
    if (password.length >= 8) {
      strength++;
    }

    if (/[a-z]/.test(password)) {
      strength++;
    }

    if (/[A-Z]/.test(password)) {
      strength++;
    }

    if (/\d/.test(password)) {
      strength++;
    }

    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      strength++;
    }

    console.log(strength);
    return strength;
  }
  const passwordStrength = checkPass(password)

  return (
    <>
      <h1>Edit Account</h1>
        <Container>
            <FormGroup>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormLabel>UserName</FormLabel>
                        <FormControl type="text" name="username" onChange={handleChange} defaultValue={props.account.username}></FormControl>
                    </div>
                    <div>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type="text" name="emailAddress" onChange={handleChange} defaultValue={props.account.emailAddress}></FormControl>
                    </div>
                    <div>
                        <FormLabel>password</FormLabel>
                        <FormControl type="text" name="password" onChange={(event)=> {handleChange(event); savePassword(event)}} defaultValue={password}></FormControl>
                        <div style={{ width: "30vw" }} ><ProgressBar variant="success" now={passwordStrength * 20} label={`${passwordStrength}/5`} /> </div>
                        <Button onClick={generateStrongPassword}> Generate password </Button>
                    </div>
                    <div>
                        <FormLabel>website</FormLabel>
                        <FormControl type="text" name="website" onChange={handleChange} defaultValue={props.account.website}></FormControl>
                    </div>
                    <div>
                        <FormControl type="submit" value="Edit account"></FormControl>
                    </div>
                </form>
            </FormGroup>
     </Container>
    </>
  )
}