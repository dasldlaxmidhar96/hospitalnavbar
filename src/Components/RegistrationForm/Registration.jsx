import React, { useState } from 'react';

const Registration = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: '15px' }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Title</option>
                          <option value="2">Mr.</option>
                          <option value="3">Ms.</option>
                          <option value="4">Mrs.</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            id="firstName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            id="lastName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label for="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="emailAddress"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="phoneNumber">
                            State
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <select
                            class="form-select form-select-lg"
                            aria-label=".form-select-lg example"
                          >
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">United State</option>
                            <option value="3">South Africa</option>
                          </select>
                          <label className="form-label" for="phoneNumber">
                            Country
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="phoneNumber">
                            Pincode
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Addresss</label>
                      <textarea
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
