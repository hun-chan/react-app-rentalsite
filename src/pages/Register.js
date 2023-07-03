const Register = () => {
    let handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(process.env.REACT_APP_URL + "/api/signUp", {
        method: "POST",
        body: new FormData(document.getElementById("signUpForm")),
        }).then((jsonData) => {
            console.log(jsonData);
            return jsonData.json();
        }).then((data)=>{
            if (data == 1){
                alert("success");
                window.location.href="./Login";
            }
            else if (data == 0){
                alert("user name already exist!");
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="login-page">
            <div className="login-block">
                <h1>Sign Up</h1> 
                <form id="signUpForm" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                    <p>USER</p>
                    <p><input type="text" name="name"></input></p>
                    <p>PASSWORD</p>
                    <p><input type="password" name="password"></input></p>
                    <p>Contact</p>
                    <p><input type="text" name="contact"></input></p> 
                    <p><input type="submit" value="SUBMIT"></input></p>
                </form>
            </div>
        </div>
    );
}

export default Register;