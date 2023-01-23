import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Components/NavItems/Aboutus';
import Internationalpatients from './Components/NavItems/Internationalpatients';
import PayOnline from './Components/NavItems/PayOnline';
import OnlineLabReports from './Components/NavItems/OnlineLabReports';
import Careers from './Components/NavItems/Careers';
import Enquiry from './Components/NavItems/Enquiry';
import Feedback from './Components/NavItems/Feedback';
import Doctors from './Components/NavItems/Doctors';
import Specialist from './Components/NavItems/Specialist';
import HospitalDir from './Components/NavItems/HospitalDir';
import BookanAppointment from './Components/NavItems/BookanAppoint';
import Contact from './Components/NavItems/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
