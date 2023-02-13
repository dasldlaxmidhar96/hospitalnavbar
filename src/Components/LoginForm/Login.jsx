import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userName, setUerName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log();
  };
  return (
    <section className="vh-150 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card .bg-info.bg-gradient">
              <div className="card-body p-5 text-left">
                <div className="mb-md-2 mt-md-1 pb-3">
                  <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                </div>
                <form onClick={handleSubmit}>
                  <label className="form-label">Select user</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option value="1">Patient</option>
                    <option value="2">Doctor</option>
                    <option value="3">Admin</option>
                    <option value="3">Employee</option>
                  </select>
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
                  <div class="d-grid gap-2 col-12 mx-auto mt-2">
                    <button class="btn btn-danger" type="button">
                      LOGIN
                    </button>
                    <Link class="text-muted" to="#!">
                      Forgot Password?
                    </Link>
                  </div>
                </form>
              </div>
              <div className="text-center">
                <p>
                  Need to create? <Link to="#!">SIGNUP</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
