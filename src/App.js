import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import ProfilePhoto from './Components/Profil/ProfilePhoto';
import FullName from './Components/Profil/FullName';
import Address from './Components/Profil/Address';


function App() {
  return (
    <div className="App">
      <div className="containe">
        <ProfilePhoto />
        <div className='user-id'>
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
