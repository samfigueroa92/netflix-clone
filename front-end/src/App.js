//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//styling
import './App.css';

//components
import LandingPage from "./components/LandingPage/LandingPage";
import SignInPage from "./components/SignIn/SignInPage";
import Registration from "./components/Registration/Registration";

//routes
  //sign in page
  //registration page
  //error
  //loading
  //dashboard

const App = () => {
  const [registrationEmail, setRegistrationEmail] = useState('');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage registrationEmail={registrationEmail} setRegistrationEmail={setRegistrationEmail} />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/registration' element={<Registration registrationEmail={registrationEmail} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
