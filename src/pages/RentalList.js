import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RentalList = () => {
    //取得所有耳機資訊
    //搜尋(過濾)使用usestate在前端完成
    const [rentals, setRentals] = useState([]);
    /*
    let getHPs = async(e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        //e.preventDefault();
        await fetch(process.env.REACT_APP_URL + '/api/browse', {
            headers:{
                'content-type': 'text/plain'
            },
            method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((data) => {
            console.log("data", data);
            data.forEach(element => {
                HPList.push(element);
            });
            setRentals(data)
            HPList = data;
        }).catch((err) => {
            console.log(err);
        });
    };*/
    //getHPs();
    const handleFilter = (location) => {
        let temp = rentals;
        let newRentals = rentals.filter(rental => rental.location === location);
        if (newRentals.length === 0){
            newRentals = temp;
        }
        //getHPs();
        setRentals(newRentals);
    }

    const handleFilter2 = (model) => {
        let temp = rentals;
        let newRentals = rentals.filter(rental => rental.earphone_name === model);
        if (newRentals.length === 0){
            newRentals = temp;
        }
        //getHPs();
        setRentals(newRentals);
    }
    useEffect(() =>{
        fetch(process.env.REACT_APP_URL + '/api/browse', {
            headers:{
                'content-type': 'text/plain'
            },
            method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((data) => {
            setRentals(data);
        }).catch((err) => {
            console.log(err);
        });
    },[])

    let handleRent = async (id) => {
        //if (event && event.preventDefault) { event.preventDefault(); }
        //event.preventDefault();
        //需檢查user是否為此耳機的擁有者 ，傳送耳機ID及用戶ID
        await fetch(process.env.REACT_APP_URL + "/api/change_state_to_0", {
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
    return (
        <div className="rental-list">
            <h1>HeadPhone List</h1> 
            <span><input type="text" placeholder="search by Model..." name="ModelFilter" onChange={(e) => handleFilter2(e.target.value)}></input></span>
            <span><input type="text" placeholder="search by Location..." name="LocationFilter" onChange={(e) => handleFilter(e.target.value)}></input></span>
            {rentals.map((rental) => (
                <div>
                    <div className="rental-preview" key={rental.earphone_id}>
                        <h2>Model: { rental.earphone_name }</h2>
                        <p>by { rental.account }, {rental.location}</p>
                        {rental.state ? (
                            <p>Now available!</p>
                        ) : (
                            <p>Not available</p>
                        )}
                        <Link to={'/Headphone/' + rental.earphone_id}>check it out!</Link>
                        <button onClick={(e)=>handleRent(e.target.value)} value={rental.earphone_id}>Request rent</button>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RentalList;