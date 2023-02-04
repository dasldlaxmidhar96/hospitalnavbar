import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FaqMenu from './Components/Faq/FaqMenu';

// import Registration from './Components/RegistrationForm/Registration';
// import Login from './Components/LoginForm/Login';

function App() {
  return (
    <div className="page">
      {/* <Login /> */}
      {/* <Registration /> */}
      <FaqMenu />
    </div>
  );
}

export default App;
