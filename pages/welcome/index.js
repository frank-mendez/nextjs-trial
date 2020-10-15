import React, { useContext, useState } from 'react'
import useToggle from '../../src/hooks/useToggle'
import useInputState from '../../src/hooks/useInputState'
import { AuthContext } from '../../src/contexts/AuthContext'
import { Alert } from 'antd';
import _ from 'lodash'

const index = () => {
    const { registerUser, registerErrorMessage, registerLoading, emailLogin, errorMessage } = useContext(AuthContext)
    const [active, setActive] = useToggle(true)
    //Sign Up
    const [signUpEmail, handleSignUpEmailChange] = useInputState('')
    const [signUpPassword, handleSignUpPasswordlChange] = useInputState('')
    const [signUpPasswordConfirm, handleSignUpPasswordlConfirm] = useInputState('')
    const [signUpFirstName, handleSignUpFirstName] = useInputState('')
    const [signUpLastName, handleSignUpLastName] = useInputState('')
    //Login
    const [username, hanldeUsernameChange] = useInputState('')
    const [password, handlePasswordChange] = useInputState('')

    const handleClick = (e) => {
        e.preventDefault()
        setActive()
    }

    const handleSignUp = e => {
        e.preventDefault()
        registerUser(signUpEmail, signUpPassword, signUpPasswordConfirm, signUpFirstName, signUpLastName)
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        emailLogin(username, password)
    }


    return (
        <div className="form-wrap">
        <div className="tabs">
          <h3 className="signup-tab"><a className={active ? 'active' : ''} onClick={(e) => handleClick(e)} href="#">Sign Up</a></h3>
          <h3 className="login-tab"><a className={!active ? 'active' : ''}  href="#login-tab-content" onClick={(e) => handleClick(e)}>Login</a></h3>
        </div>{/*.tabs*/}
        <div className="tabs-content">
          <div id="signup-tab-content" className={active ? 'active' : ''}>
            <form className="signup-form" method="post">
                {!_.isEmpty(registerErrorMessage) && <Alert style={{marginBottom: '20px'}} message={registerErrorMessage} type="error" showIcon />}
                        <input type="email" value={signUpEmail} onChange={e => handleSignUpEmailChange(e)} className="input" id="user_email" autoComplete="off" placeholder="Email" />
                        <input type="text" value={signUpFirstName} onChange={e => handleSignUpFirstName(e)} className="input" autoComplete="off" placeholder="First Name" />
                        <input type="text" value={signUpLastName} onChange={e => handleSignUpLastName(e)} className="input" autoComplete="off" placeholder="Last Name" />
              <input type="password" value={signUpPassword} onChange={e => handleSignUpPasswordlChange(e)}  className="input" id="user_name" autoComplete="off" placeholder="Password" />
              <input type="password" value={signUpPasswordConfirm} onChange={e => handleSignUpPasswordlConfirm(e)} className="input" id="user_pass" autoComplete="off" placeholder="Confirm Password" />
              <input type="submit" onClick={(e) => handleSignUp(e)} className="button" disabled={registerLoading} value="Sign Up" />
            </form>{/*.login-form*/}
            <div className="help-text" >
              <p>By signing up, you agree to our</p>
              <p><a href="#">Terms of service</a></p>
            </div>{/*.help-text*/}
          </div>{/*.signup-tab-content*/}
          <div id="login-tab-content" className={!active ? 'active' : ''}>
            <form className="login-form" method="post">
                {!_.isEmpty(errorMessage) && <Alert style={{marginBottom: '20px'}} message={errorMessage} type="error" showIcon />}
                <input type="text" value={username} onChange={e => hanldeUsernameChange(e)} className="input" id="user_login" autoComplete="off" placeholder="Email" />
                <input type="password" value={password} onChange={e => handlePasswordChange(e)} className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                <input type="checkbox" className="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Remember me</label>
                <input type="submit" onClick={e => handleLoginSubmit(e)} value='Login' className="button" />
            </form>{/*.login-form*/}
            <div className="help-text">
              <p><a href="#">Forget your password?</a></p>
            </div>{/*.help-text*/}
          </div>{/*.login-tab-content*/}
        </div>{/*.tabs-content*/}
      </div>
    )
}

export default index
