import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {register } from '../actions/userActions';


function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error } = userRegister;


    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    // If use
    useEffect(() => {
        if (userInfo){
            props.history.push(redirect)
        }
        return () => {

        }
    }, [userInfo]);
    

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
        props.history.push(redirect);

    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Register Your Item Shop Account!</h2>
                </li>
                <li>
                    {loading && <div>Register Complete</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                        </label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="repassword">
                       Re-Enter Password
                        </label>
                    <input type="password" id="repassword" name="repassword" onChange={(e) => setRePassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
                <li>
                    <h4>
                    Already Have an account?
                    </h4>
                    <Link to={redirect ===  "/" ? "signin" : "signin?redirect=" + redirect } className="button text-center secondary">Sign in!</Link>
                    
                    </li>
                
            </ul>
        </form>
    </div>

}

export default RegisterScreen;