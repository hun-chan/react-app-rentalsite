//import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './Navbar';
import Home from './pages/Home';
import RentalList from './pages/RentalList';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';
import HeadPhoneFile from './pages/HeadphoneFile';
import EditHeadphoneFile from './pages/editHeadphone';
import AddHeadphoneFile from './pages/addHeadphone';

function App() {
  //取得所有耳機 利用耳機id建立route
  let HPs = [];
  for (var i = 0; i < 50; i++){
    HPs.push(i);
  }
  /*
  let getHPs = () => {
    //if (e && e.preventDefault) { e.preventDefault(); }
    //e.preventDefault();
    fetch(process.env.REACT_APP_URL + '/api/browse', {
        headers:{
            'content-type': 'text/plain'
        },
        method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((data)=>{
        data.forEach(element => {
          HPs.push(toString(element.earphone_id));
        });
        console.log(HPs);
    }).catch((err) => {
        console.log(err);
    });
  };
  //getHPs();
*/
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/RentalList" element={<RentalList/>}></Route>
        <Route path="/Login" element={<LoginPage/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/UserPage" element={<UserPage/>}></Route>
        {HPs.map((hpids) => (
          <Route path={'/Headphone/' + hpids} element={<HeadPhoneFile fileID={hpids}/>}></Route>
        ))}
        {HPs.map((hpids) => (
          <Route path={'/EditHeadphone/' + hpids} element={<EditHeadphoneFile fileID={hpids}/>}></Route>
        ))}
        <Route path="/AddHeadphone" element={<AddHeadphoneFile/>}></Route>
      </Routes>
    </Router>
  );
}


export default App;
