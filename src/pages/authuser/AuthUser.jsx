import React from 'react'
import './AythUser.css'
import close from '../../img/close.svg';
const AuthUser = ({ setConfirmPassword, setPassword, setLastName, lastName, setEmail, confirmpassword, setName, email, nameuser, password, changeSubmit, onclickFalse }) => {
  const changesSubmit=(e)=>{
    e.preventDefault()
    changeSubmit(e)
  }
  return (
    <div className='modal-overlay'>
      <div className='auth-img-close'>
        <img onClick={onclickFalse} className='auth-close' src={close} alt="" /><form onSubmit={changesSubmit} className='auth-form active'>
          <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
          <input type="name" name='name' onChange={(e) => setName(e.target.value)} value={nameuser}  placeholder='Name' />
          <input type="lastname" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName}   placeholder='Lastname' />
          <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
          <input type="password" name="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} placeholder='Confirm password' />
          <button className='auth-submit-button'>SEND</button>
        </form></div>

    </div>
  )
}

export default AuthUser