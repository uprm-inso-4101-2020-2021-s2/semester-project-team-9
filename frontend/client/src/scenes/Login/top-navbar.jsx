import React, { useState } from 'react';
import SignUpContainer from './Signup';
import LogInContainer from './Login';


const TopNavBar = () => {

    const [logIsOpen, setIsOpen] = useState(false);
    const [signUpIsOpen, setOpen] = useState(false);
    const [buttonLName, setLButtonName] = useState("Login");
    const [buttonSName, setSButtonName] = useState("Sign Up");

    const toggleLog = () => {

        if (buttonLName === "Login") {
            setLButtonName("Close");
        }
        else {
            setLButtonName("Login");
        }
        setIsOpen(!logIsOpen);
    }
    const toggleSign = () => {

        if (buttonSName === "Sign Up") {
            setSButtonName("Close");
        }
        else {
            setSButtonName("Sign Up");
        }
        setOpen(!signUpIsOpen);
    }


    return (
        <div>

            <div style={{ padding: "0.4vh", backgroundColor: "#cbcff8" }}>
                <a href="../public/index.html" class="bar-item" style={{ backgroundcolor: 'black' }}><h1 style = {{textAlign:'center'}}>SUBSCRIPTION APP</h1></a>

                <button type="button" id="login" onClick={() => toggleLog()}><i class="fa fa-user" style={{ color: 'blue', margin: '10px' }} >{buttonLName}</i></button >
                {!signUpIsOpen && logIsOpen && <LogInContainer />}

                <button type="button" id="signup" onClick={() => toggleSign()} style={{ color: 'rgb(125, 145, 233)', margin: '10px' }} >{buttonSName}</button >
                {!logIsOpen && signUpIsOpen && <SignUpContainer />}

            </div>
            <div style = {{ alignContent:"center", textAlign: "center", margin: "auto",height:"1000px" , alignItems: "center", alignSelf: "center", position:"flex"}}>
            <img src = "/images/logo.png" style = {{height: "500px", top:"200px", padding: "55px"}} ></img>
            </div>
            </div>
               )

}
export default TopNavBar;