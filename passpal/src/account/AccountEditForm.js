import React, { useState, useEffect } from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Form, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap'


export default function AccountEditForm(props) {
  const [newAccount, setNewAccount] = useState({})
  const [password, setPassword] = useState("");

  let generatedPassword = "";


  useEffect(() => {
    setNewAccount(props.account)
    setPassword(props.account.password)
    console.log('set', newAccount);
  }, [])

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    const account = { ...newAccount }

    account[attributeToChange] = newValue
    setNewAccount(account)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('new', newAccount);
    if (generatedPassword !== "") {
      newAccount.password = password
    }
    props.editAccount(newAccount)
  }
  const savePassword = (event) => {
    setPassword(event.target.value)
  }
  function generateStrongPassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    for (let i = 0, n = charset.length; i < length; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(generatedPassword)
    newAccount.password = generatedPassword
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
        <FormGroup onSubmit={handleSubmit}>
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
              <FormControl type="text" name="password" onChange={(event) => { handleChange(event); savePassword(event) }} defaultValue={password}></FormControl>
              <Button onClick={generateStrongPassword}> Generate password </Button>
              <div style={{ width: "30vw" }} ><ProgressBar variant="success" now={passwordStrength * 20} label={`${passwordStrength}/5`} /> </div>
            </div>
            <div>
              <FormLabel>website</FormLabel>
              <FormControl type="text" name="website" onChange={handleChange} defaultValue={props.account.website}></FormControl>
            </div>
            <div>
              <FormControl type="submit" value="Edit account" style={{ width: '40%', margin: '0 auto', backgroundColor: '#0d6efd', color: 'white' }}></FormControl>
            </div>
          </form>
        </FormGroup>
      </Container>
    </>
  )
}
{/* <div>
      <h1>Edit Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input type="text" name="username" onChange={handleChange} defaultValue={props.account.username}></input>
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" name="emailAddress" onChange={handleChange} defaultValue={props.account.emailAddress}></input>
        </div>
        <div>
          <label>password</label>
          <input type="text" name="password" onChange={(event) => { handleChange(event); savePassword(event) }} defaultValue={password}></input>
          <div style={{ width: "30vw" }} ><ProgressBar variant="success" now={passwordStrength * 20} label={`${passwordStrength}/5`} /> </div>
        </div>
        <div>
          <label>website</label>
          <input type="text" name="website" onChange={handleChange} defaultValue={props.account.website}></input>
        </div>
        <div>
          <input type="submit" value="Edit account"></input>
        </div>
      </form>
      <button onClick={generateStrongPassword}> Generate password </button>

    </div> */}