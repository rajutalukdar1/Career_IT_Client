import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {

    const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handelSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photoURL);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!!!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='fullName' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already, Have an Accounts?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <p className='text-center'>-------------Or-------------</p>
                <div>
                    <Link onClick={handleGoogleSignIn}>
                        <div className='flex justify-content-center align-items-center mt-3'>
                            <div className='flex justify-between items-center login-container'>
                                <div className='w-10 h-10 ml-1'>
                                    <img
                                        src='https://i.ibb.co/7yz77Hj/google.png' alt=''
                                    ></img>
                                </div>
                                <div className='text-black font-semibold'>
                                    Continue with Google
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={handleGithubSignIn}>
                        <div className='flex justify-content-center align-items-center mt-3'>
                            <div className='flex justify-between items-center login-container'>
                                <div className='w-10 h-10 ml-1'>
                                    <img
                                        src='https://i.ibb.co/Z62F8M5/github-512.png' alt=''
                                    ></img>
                                </div>
                                <div className='text-black font-semibold'>
                                    Continue with GitHub
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;