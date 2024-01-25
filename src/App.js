import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;