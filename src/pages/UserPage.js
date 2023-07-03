import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, onLogout } from "../cookie";

const UserPage = () => {
    const [MineRentals, setRentals] = useState([]);
    /*let getUserHPs = async(e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        //e.preventDefault();
        await fetch(process.env.REACT_APP_URL + '/api/browse_mine', {
            body: document.getElementById("user_name").innerHTML, 
            headers:{
                'content-type':'text/plain'
            },
            method: 'POST'
        }).then((response) => {
          return response.json();
        }).then((data)=>{
            console.log(data);
            UserHPList = data;
            setRentals(data);
        }).catch((err) => {
            console.log(err);
        });
    };*/

    useEffect(() =>{
        fetch(process.env.REACT_APP_URL + '/api/browse_mine', {
            body: document.getElementById("user_name").innerHTML, 
            headers:{
                'content-type':'text/plain'
            },
            method: 'POST'
        }).then((response) => {
          return response.json();
        }).then((data)=>{
            console.log(data);
            setRentals(data);
        }).catch((err) => {
            console.log(err);
        });
    },[])



    let handleEnd = async (id) => {
        //if (event && event.preventDefault) { event.preventDefault(); }
        //event.preventDefault();
        //需檢查user是否為此耳機的擁有者 ，傳送耳機ID及用戶ID
        await fetch(process.env.REACT_APP_URL + "/api/change_state_to_1", {
            method: "POST",
            body: id,
            headers:{
                'content-type':'text/plain'
            }
        }).then((Response)=>{
            return Response.json();
        }).then((Response) => {
            console.log(Response);
            if(Response === 1){
                window.location.reload();
            }
        })
    };

    let handleDelete = async (id) => {
        //if (event && event.preventDefault) { event.preventDefault(); }
        //event.preventDefault();
        //需檢查user是否為此耳機的擁有者 ，傳送耳機ID及用戶ID
        await fetch(process.env.REACT_APP_URL + "/api/delete_earphone", {
            method: "POST",
            body: id,
            headers:{
                'content-type':'text/plain'
            }
        }).then((Response)=>{
            return Response.json();
        }).then((Response) => {
            console.log(Response);
            if(Response === 1){
                //window.location.href="./UserPage";
                window.location.reload();
            }
        })
    };
    let handleLogout = () => {
        onLogout();
        window.location.href="./";
        console.log(loginUser());
    }
    return (
        <div className="rental-list">
            <h1>{loginUser()}:</h1>
            {MineRentals.map((rental) => (
                <div>
                    <div className="rental-preview" key={rental.earphone_id}>
                        <h2>name: { rental.earphone_name }</h2>
                        <p>by { rental.account }, {rental.location}</p>
                        {rental.state ? (
                            <p>Still Here!</p>
                        ) : (
                            <p>Rent Out!</p>
                        )}
                        <span><Link to= {"/EditHeadphone/" + rental.earphone_id}>Edit</Link></span>
                        <span><Link to={'/Headphone/' + rental.earphone_id}>/   Detail</Link></span>
                        <span><button onClick={(e)=>handleEnd(e.target.value)} value={rental.earphone_id}>end contract</button></span>
                        <span><button onClick={(e)=>handleDelete(e.target.value)} value={rental.earphone_id}>delete</button></span>
                    </div>
                </div>
            ))}
            <Link to="/AddHeadphone" className="goodlinks">ADD New Headphone!</Link>
            <button onClick={handleLogout} className="goodbuttons">Log Out</button>
        </div>
    );
}

export default UserPage;