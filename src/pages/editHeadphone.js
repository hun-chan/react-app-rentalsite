import { useState, useEffect } from "react";

const EditHeadphoneFile = (props) => {
    console.log(props.fileID)
    //特定id取得耳機資訊
    //let inf = {};
    const [HPinf, setInf] = useState({});
    //特定id取得耳機資訊
    /*
    let getHPinf = async (event) => {
        if (event && event.preventDefault) { event.preventDefault(); }
        await fetch(process.env.REACT_APP_URL + "/api/select_one", {
            method: "POST",
            body: props.fileID,
            headers:{
                'content-type':'text/plain'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            inf = data[0];
            setInf(data[0]);

        })
    }

    let show = () => {
        getHPinf();
        setInf(inf)
        console.log(HPinf);
    }
*/
    let handleSubmit = async (event) => {
        let formdata = new FormData(document.getElementById("editHPForm"));
        event.preventDefault();
        await fetch(process.env.REACT_APP_URL + "/api/edit_earphone", {
        method: "POST",
        body: formdata,
        }).then((jsonData)=>{
            return jsonData.json();
        }).then((data) => {
            console.log(data);
            if (data == 1){
                alert("success");
                window.location.href="./headphone/"+ props.fileID;
            }
            else if (data == 0){
                alert("something's wrong");
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() =>{
        fetch(process.env.REACT_APP_URL + "/api/select_one", {
            method: "POST",
            body: props.fileID,
            headers:{
                'content-type':'text/plain'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setInf(data[0]);

        })
    },[])

    return(
        <div className="HPFile">
            <h2>original file:</h2>
            <div>
                <p>HeadPhone id: {props.fileID}</p>
                <p>Headphone type :{HPinf.earphone_name}</p>
                <p>price : {HPinf.price}</p>
                <p>description :{HPinf.description}</p>
                <p>location : {HPinf.location} </p>
                <p>description : {HPinf.description}</p>
            </div>
            <h2>update file:</h2>
            <div>
                <form id="editHPForm" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                    <p>Headphone ID</p>
                    <p><input type="text" name="earphone_id" value={props.fileID} readOnly></input></p>
                    <p>Headphone Type</p>
                    <p><input type="text" name="earphone_name"></input></p>
                    <p>Price</p>
                    <p><input type="text" name="price"></input></p>
                    <p>Picture</p>
                    <p><input type="text" name="picture"></input></p>
                    <p>description</p>
                    <p><textarea name="description" rows="6" cols="40"></textarea></p>
                    <p>Contract</p>
                    <p><input type="text" name="contract"></input></p> 
                    <p>Location</p>
                    <p><input type="text" name="location"></input></p>
                    <p><input type="submit" value="Submit"></input></p>
                </form>
            </div>
        </div>
    );
}
export default EditHeadphoneFile;