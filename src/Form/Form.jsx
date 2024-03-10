import React, { useState } from 'react'

import './Form.css'

function Form() {
    const [name, setName] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <form>
            <label>
                Username
                <input
                    type="text"
                    placeholder='Enter username'
                    value={name}
                    onChange={nameHandler}
                />
            </label>
            <label>
                Password
                <input type="password" />
            </label>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form