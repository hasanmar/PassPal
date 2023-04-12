import React, { useState, useEffect } from "react";
import Axios from "axios";
import Account from "./Account";
import AccountCreateForm from "./AccountCreateForm";
import AccountEditForm from "./AccountEditForm";
import {Container, Form, Button, Table} from 'react-bootstrap'

export default function AccountList() {
  const [accounts, setAccounts] = useState([]);
  const [isEdit, setIsEdit] = useState(false)
  const [currentAccount, setCurrentAccount] = useState("")

  useEffect(() => {
    loadAccountsList()

  }, [])

  const loadAccountsList = () => {
    Axios.get("account/index")
      .then((response) => {
        // will using state to store data
        setAccounts(response.data.accounts)
      })
      .catch((err) => {
        console.log("Error Retreiving Accounts")
        console.log(err)
      })

  }


  const editView = (id) => {
    Axios.get(`account/edit?id=${id}`,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log(res.data.account)
        let account = res.data.account
        console.log("Load Account Information")
        setIsEdit(true)
        setCurrentAccount(account)
      })
      .catch(err => {
        console.log("Error Loading Account Information")
        console.log(err)
      })
  }

  const editAccount = (account) => {
    console.log(account);
    Axios.put("account/update", account,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log("Account updated")
          loadAccountsList()
          console.log(res)
  
        })
        .catch(err=>console.log(err))
    }

    const deleteAccount = (id) => {
        Axios.delete(`account/delete?id=${id}`)
        .then(res => {
          console.log("Record Delete Successfully")
          loadAccountsList()
          console.log(res)
        })
        .catch(err => {
          console.log("Error Deleting Account")
          console.log(err)
        })

    } 

    const allAccounts = accounts.map((account, index) => (
        <tr key={index}>
          <Account {...account} editView={editView} deleteAccount={deleteAccount} />
    
        </tr>
        ))

    return (
      
            <div>
              <h1>AccountList</h1>
              <div>
                <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>UserName</th>
                    <th>Email Address</th>
                    <th>password</th>
                    <th>website</th>
                    <th>Actions</th>
                  </tr>
                  {allAccounts}
                </tbody>
                </Table>
              </div>
              {(isEdit) ?
              <AccountEditForm key={currentAccount._id} account={currentAccount}
              editAccount={editAccount} />
              : null
              }
            </div>
      )

}