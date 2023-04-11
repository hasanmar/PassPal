import React,{useState, useEffect} from "react";
import Axios  from "axios";
import Account from "./Account";
import AccountCreateForm from "./AccountCreateForm";
import AccountEditForm from "./AccountEditForm";


export default function AccountList(){
    const [accounts, setAccounts] = useState([]);
  const [isEdit, setIsEdit] = useState(false)
  const [currentAccount, setCurrentAccount] = useState("")

    useEffect(() => {
      loadAccountsList()
        
    },[])
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
    const addAccount = (account) => {
        Axios.post("account/add", account,
        {
          headers : { 
            'Authorization': 'Bearer ' +localStorage.getItem('token')
        }
      })
        .then ((response) => {
            console.log('account', account);
          console.log("Account Added Successfully!!!!")
          loadAccountsList()
        })
        .catch((err) => {
          console.log("Error Adding Account")
          console.log(err)
        })
    }

    const editView = (id) =>{
        Axios.get(`account/edit?id=${id}`,
        {
          headers : { 
            'Authorization': 'Bearer ' +localStorage.getItem('token')
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

    const editAccount = (account) =>{
        Axios.put("account/update", account, 
        {
          headers : { 
            'Authorization': 'Bearer ' +localStorage.getItem('token')
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
                <tbody>
                  <tr>
                    <th>UserName</th>
                    <th>Email Address</th>
                    <th>password</th>
                    <th>website</th>
                  </tr>
                  {allAccounts}
                </tbody>
              </div>
              {(!isEdit) ?
              <AccountCreateForm addAccount={addAccount}/>
                :
              <AccountEditForm key={currentAccount._id} account={currentAccount}
              editAccount={editAccount} />
        
              }
            </div>
      )

}