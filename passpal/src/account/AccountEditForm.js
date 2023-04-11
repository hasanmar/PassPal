import React, {useState} from 'react'

export default function AccountEditForm(props) {
    const [newAccount, setNewAccount] = useState({})


    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const account = {...newAccount}
        account[attributeToChange] = newValue
        console.log(account)
        setNewAccount(account)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("new", newAccount)
        props.editAccount(newAccount)
    }

  return (
    <div>
        <h1>Edit Account</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" name="username" onChange={handleChange}></input>
            </div>
            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" onChange={handleChange}></input>
            </div>
            <div>
                <label>password</label>
                <input type="text" name="password" onChange={handleChange}></input>
            </div>
            <div>
                <label>website</label>
                <input type="text" name="website" onChange={handleChange}></input>
            </div>
            <div>
                <input type="submit" value="Edit account"></input>
            </div>
        </form>
    </div>
  )
}