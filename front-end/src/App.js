//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styling
import './App.css';

//components
import LandingPageBanner from "./components/LandingPage/LandingPageBanner/LandingPageBanner";

//routes
  //sign in page
  //get started page
  //error
  //dashboard
  //advertisement page

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPageBanner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
