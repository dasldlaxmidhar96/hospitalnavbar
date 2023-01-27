import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Registration from './Components/RegistrationForm/Registration';
// import Login from './Components/LoginForm/Login';

function App() {
  return (
    <div className="page">
      {/* <Navbar /> */}
      {/* <Login /> */}
      <Registration />
      {/* <Routes>
        <Route path="/about-us" element={<Aboutus />} />
        <Route
          path="/international-patients"
          element={<Internationalpatients />}
        />
        <Route path="/payonline" element={<PayOnline />} />
        <Route path="/labreports" element={<OnlineLabReports />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/hospitaldir" element={<HospitalDir />} />
        <Route path="/appointment" element={<BookanAppointment />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
