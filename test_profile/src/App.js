import './App.css';
import LoginHome from './component/LoginHome/LoginHome';
import Layout from './component/NavBar/MainPage/Layout';
import NavBar from './component/NavBar/NavBar';


function App() {
  return (
    <div className="App">
    {
     localStorage.getItem("user")==undefined ? <LoginHome /> :  <span><NavBar /> <Layout /></span>
     
     }
      {/* <LoginHome/>*/}
    
    </div>
  );
}

export default App;
