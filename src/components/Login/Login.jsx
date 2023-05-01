import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/'

    const handleSignIn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user
            form.reset();
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : "password"} name="password" id="" required />
                    <div>
                        <p onClick={()=>setShow(!show)}>{show ? "hide password" : "show password"}</p>
                    </div>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-Jhon? please <Link to='/register'>Sign Up</Link></small></p>
        </div>
    );
};

export default Login;