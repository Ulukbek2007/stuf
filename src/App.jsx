import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/about/Cart'
import AuthUser from './pages/authuser/AuthUser'
import axios from 'axios'
const App = () => {
  const [componentView, setComponentView] = useState(true)
  const [view, setView] = useState(true)
  const [activeForm, setActiveForm] = useState(false)
  const [cartid, setCartId] = useState([])
  const [lengthcart, setLengthCart] = useState(0)
  const [nameuser, setNameUser] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState([])
  const [confirmpassword, setConfirmPassword] = useState('')
  const [saveUser, setSaveUser] = useState('')
  const changeSubmit = async (e) => {
    e.preventDefault();
    try {
      if(email.trim()&&password.trim()&&nameuser.trim()&&lastName.trim()&&confirmpassword.trim()!==''&&password===confirmpassword&&password.length>6&&confirmpassword.length>6){
        const response = await axios.post(
        'https://659d6043633f9aee79094a3d.mockapi.io/short/categories',
        {
          email: email,
          password: password,
          nameuser: nameuser,
          lastName: lastName,
          confirmPassword: confirmpassword
        }
      );
      
      alert('Данные успешно отправлены:')
      console.log(response.data);
      setSaveUser(nameuser)
  setTimeout(() => {
    setActiveForm(false)
  }, 1000);
      }
      else{
        setEmail('')
        setLastName('')
        setConfirmPassword('')
        setPassword('')
        setNameUser('')
        console.log('Ошибка');
      }
    } catch (error) {
      alert('Произошла ошибка:', error);
    }
  };
console.log(saveUser);


const onclickOnchange=(e)=>{
  const {name,value}=e.target
  setUserData({...userData,[name]: value})

}

const onclickTrue=()=>{
  setActiveForm(true)
}

const onclickFalse=()=>{
  setActiveForm(false)
}

  return (
    <div className='container'>
      <Header onclickForm={onclickTrue} saveuser={saveUser} lengthcart={lengthcart} />

      <Routes>
        <Route 
        path="/" 
        element={
        <Home 
        setConfirmPassword={setConfirmPassword}
        setPassword={setPassword}
        setLastName={setLastName}
        lastName={lastName}
        setEmail={setEmail}
        setName={setNameUser} 
        email={email} 
        password={password} 
        nameuser={nameuser}  
        changeSubmit={changeSubmit} 
        onclickOnchange={onclickOnchange} 
        onclickFalse={onclickFalse} 
        activeForm={activeForm} 
        setLengthCart={setLengthCart} 
        setCartId={setCartId} 
        setview={view} 
        view={setComponentView}
        confirmpassword={confirmpassword} 
        />}>
        </Route>
        <Route 
        path='/cart' 
        element={
        <Cart 
        setLengthCart={setLengthCart} 
        cartid={cartid} />} />
      </Routes>
      {componentView ? <Footer /> : null}
    </div>
  )
}

export default App