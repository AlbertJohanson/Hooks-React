/* eslint-disable import/imports-first */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Message } from './Message'


import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/components/02-useEffect-styles/useEffect.css'


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        
    }, []);

    useEffect(() => {
    }, [formState]);
    

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name === '123' && <Message />}
        </div>
    );
};
