import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('');
  const [userName, setUerName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log();
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-secondary text-white"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5 text-left">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label">Usertype</label>
                    <input
                      type="text"
                      onChange={(e) => setUserType(e.target.value)}
                      value={userType}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <form onClick={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Username</label>
                      <input
                        type="email"
                        onChange={(e) => setUerName(e.target.value)}
                        value={userName}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <Link
                        className="text-white-50"
                        href="#!"
                        onClick={() => {
                          navigate('/');
                        }}
                      >
                        Forgot password?
                      </Link>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{' '}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
