import React, { Fragment, useState } from 'react';
import './top-navbar.css';
import "bootstrap";
import SignUpContainer from './Signup';
import LogInContainer from './Login';


const TopNavBar = () => {

    const [logIsOpen, setIsOpen] = useState(false);
    const [signUpIsOpen, setOpen] = useState(false);
    const [buttonLName, setLButtonName] = useState("Login");
    const [buttonSName, setSButtonName] = useState("Sign Up");

    //Changes Login button name when clicked and opens only the login pop up
    const toggleLog = () => {

        if (buttonLName === "Login") {
            setLButtonName("Close");
        }
        else {
            setLButtonName("Login");
        }
        setIsOpen(!logIsOpen);
    }
    //Changes  Sign Up button name when clicked and opens only the sign up pop up
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
        <Fragment >
            <div style={{ padding: "0.4vh", backgroundColor: "#2739d6" }}>
                <a href="../public/index.html" class="bar-item" style={{ backgroundcolor: 'black' }}><h1>SUBSCRIPTION APP</h1></a>

                <button type="button" id="login" onClick={() => toggleLog()}><i class="fa fa-user" style={{ color: 'blue', margin: '10px' }} >{buttonLName}</i></button >
                {!signUpIsOpen && logIsOpen && <LogInContainer />}

                <button type="button" id="signup" onClick={() => toggleSign()} style={{ color: 'rgb(125, 145, 233)', margin: '10px' }} >{buttonSName}</button >
                {!logIsOpen && signUpIsOpen && <SignUpContainer />}

            </div>
        </Fragment>
    )

}

// function signNav() {
//     ReactDOM.render(<SignUpContainer />, document.getElementById('root'));
// }
// function logNav() {
//     ReactDOM.render(<LogInContainer />, document.getElementById('root'));
// }
export default TopNavBar;