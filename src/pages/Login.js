import {Link} from 'react-router-dom'
import { useState } from 'react';
import { onLogin } from '../cookie';
const LoginPage = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(process.env.REACT_APP_URL + "/api/login", {
        method: "POST",
        body: new FormData(document.getElementById("loginForm")),
        }).then((jsonData) => {
            return jsonData.json();
        }).then((data)=>{
            if (data == 2){
                onLogin(document.getElementById("user_name_form").value);
                document.getElementById("user_name").innerHTML = document.getElementById("user_name_form").value;
                window.location.href="./";
            }
            else if (data == 1){
                alert("wrong password");
            }
            else if (data == 0){
                alert("not exist");
            }
        }).catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="login-page">
            <div className="login-block"> 
                <h1>LOGIN</h1>
                    <form id="loginForm" encType="multipart/form-data" method="POST" onSubmit={handleSubmit} >
                        <label>UserName:
                        <input 
                            id="user_name_form"
                            type="text" 
                            name="username" 
                            value={inputs.username || ""} 
                            onChange={handleChange}
                        />
                        </label>
                        <div></div>
                        <label>PassWord:
                            <input 
                            type="password" 
                            name="pwd" 
                            value={inputs.pwd || ""} 
                            onChange={handleChange}
                            />
                        </label>
                        <div></div>
                        <input type="submit" value="SUBMIT"></input>
                    </form>
                <span><Link to="/Register">Sign up</Link></span>  
            </div>
        </div>
    );
}

export default LoginPage;