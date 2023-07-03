import { loginUser } from "../cookie";

const AddHeadphoneFile = () => {
    let handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(process.env.REACT_APP_URL +"/api/add_earphone", {
        method: "POST",
        body: new FormData(document.getElementById("addHPForm")),
        }).then((jsonData) => {
            console.log(jsonData);
            return jsonData.json();
        }).then((data)=>{
            console.log(data);
            if (data == 1){
                window.location.href="./UserPage";
            }
            else if (data == 0){
                alert("something's wrong");
            }
        }).catch((err) => {
            console.log(err);
            window.location.href="./";
        });
    };

    return (
        <div className="HPFile">
            <h2>Add New Headphone</h2>
            <div>
                <form id="addHPForm" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                        <p>Account</p>
                        <p><input type="text" name="account" value={loginUser()} readOnly></input></p>
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

export default AddHeadphoneFile;