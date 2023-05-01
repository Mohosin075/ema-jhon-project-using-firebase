import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const [error, setError]= useState('');

    const {createUser} = useContext(AuthContext);


    const handleSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if(password !== confirm){
            setError('password does not match!');
            return
        }else if(password.length < 6){
            setError('Password less then 6 car')
            return
        }



        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div>
                    <p className='error'>{error}</p>
                </div>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                
                <input className='btn-submit' type="submit" value="Sigh Up" />
            </form>
            <p><small>Already have an account? please <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Register;