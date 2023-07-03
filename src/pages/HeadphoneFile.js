import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeadPhoneFile = (props) => {
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
        //getHPinf();
        setInf(inf)
        console.log(HPinf);
    }*/

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

    return (
        <div className="HPFile">
            <h2>{HPinf.earphone_name}</h2>
            <div>
                <p>HeadPhone id: {props.fileID}</p>
                <p>Headphone type :{HPinf.earphone_name}</p>
                <p>price : {HPinf.price}</p>
                <p>description :{HPinf.description}</p>
                <p>location : {HPinf.location} </p>
                <p>description : {HPinf.description}</p>
            </div>
        </div>
    );
}

export default HeadPhoneFile;