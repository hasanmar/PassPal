import React,{useState, useEffect} from "react";
import Signup from './user/signup'
import Signin from './user/signin'
import Account from "./account/Account";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import  Axios  from 'axios'
import jwt_decode from 'jwt-decode'
import AccountList from "./account/AccountList";
import HistoryList from './History/HistoryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Footer from "./Footer";
import AccountCreateForm from "./account/AccountCreateForm";


export default function App() {


  const[isAuth, setIsAuth] = useState(false)
  const[user , setUser] = useState({});


  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token != null) {
      let user = jwt_decode(token)

      if (user) {
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem('token')
        setIsAuth(false)
      }
    }

  },[])

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      // save the token into local storage
      let token = res.data.token
      if(token != null) {
        localStorage.setItem("token", token)
        let user = jwt_decode(token)
        setIsAuth(true)
        setUser(user)
      }
    })
    .catch(err => {
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }
  return(
        <div>
          <div>
            {/* <AccountList></AccountList> */}
          </div>
        <Router>
          <div>
          <nav>
              <div>
                <Link to="/">Home</Link> &nbsp;
                {isAuth ? 
                <>
                <Link to="/accounts" >My passwords</Link> 
                <Link to="/accounts/add" >Add new account</Link> 
                <Link to="/history" >History</Link> 
                <Link to="/logout" onClick={onLogoutHandler}>Signout</Link> 
                  </>
                : 
                <>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link> 
                </>
                }
                
                
              </div>
            </nav>
          </div>
          <div>
            {/* <HistoryList /> */}
          </div>
          <div>
            <Routes>
              {/* <Route path="/" element={<AccountList />}>
              </Route> */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/accounts" element={<AccountList />}></Route>
              <Route path="/accounts/add" element={<AccountCreateForm />}></Route>
              <Route path="/history" element={<HistoryList />}></Route>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={
                isAuth ? 
                <AccountList />
                : 
                <Signin login={loginHandler}></Signin>}>
              </Route>
            </Routes>
          </div>
        </Router>
        <div>
          <Footer></Footer>
        </div>
     </div>
     
  )
  
}


