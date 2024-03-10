import React, { useState } from 'react'

import './Form.css'

function Form() {
    const [name, setName] = useState({ text: '', error: false })
    const [password, setPassword] = useState({ text: '', error: false })
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [check, setCheck] = useState({ isChecked: false, error: false })

    const nameHandler = (e) => {
        setName(prev => ({
            ...prev,
            text: e.target.value
        }))
    }

    const passwordHandler = (e) => {
        setPassword(prev => ({
            ...prev,
            text: e.target.value
        }))
    }

    const validateName = () => {
        if (name.text.trim().length < 3) {
            setName(prev => ({
                ...prev,
                error: true,
            }))
        } else {
            setName(prev => ({
                ...prev,
                error: false,
            }))
        }
    }

    const validatePassword = () => {
        if (password.text.trim().length < 6) {
            setPassword(prev => ({
                ...prev,
                error: true,
            }))
        } else {
            setPassword(prev => ({
                ...prev,
                error: false,
            }))
        }
    }

    const checkHandler = () => {
        setCheck(prev => ({ ...prev, isChecked: !prev.isChecked }))
    }

    const validateCheck = () => {
        if (check.isChecked) {
            setCheck(prev => ({ ...prev, error: false }))
        } else {
            setCheck(prev => ({ ...prev, error: true }))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        validateName()
        validatePassword()
        validateCheck()
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Username
                <input
                    type="text"
                    placeholder='Enter username'
                    value={name.text}
                    onChange={nameHandler}
                    className={name.error ? 'error' : ''}
                />
                {name.error && <small>Username must containt at last of 3 symbols</small>}
            </label>
            <label className='password'>
                Password
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password.text}
                    onChange={passwordHandler}
                    className={password.error ? 'error' : ''}
                />
                {
                    isPasswordVisible ?
                        <i
                            className="fa-solid fa-eye-slash"
                            onClick={() => setPasswordVisible(false)}
                        /> :
                        <i
                            className="fa-solid fa-eye"
                            onClick={() => setPasswordVisible(true)}
                        />
                }
                {password.error && <small>Password must containt at last of 6 symbols</small>}
            </label>
            <label className='checkbox'>
                Confirm terms & privicy
                <input
                    type="checkbox"
                    value={check.isChecked}
                    onChange={checkHandler}
                    className={check.error ? 'error' : ''}
                />
                {check.error && <small>This field is required</small>}
            </label>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form