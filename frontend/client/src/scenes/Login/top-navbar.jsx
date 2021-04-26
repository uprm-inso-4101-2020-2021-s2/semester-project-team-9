import React, { Fragment, useState } from 'react';
import './top-navbar.css';
import backgr from '../../app-background.jpg'
import logo from '../../subscription-logo.PNG'
import "bootstrap";
import SignUpContainer from './Signup.jsx';
import LogIn from './Login.jsx';


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
            <div style={{ borderBottom: '0.3vw solid rgb(105, 222, 238)', background: '#fff', padding: "0.2vh", top: '0', width: '100%', position: 'absolute', display: 'inline' }}>
                <a href="../public/index.html" class="bar-item" style={{ width: '80%', color: "#fff", left: '25vw' }}><img alt='logo' src={logo} width="458" height="68" ></img></a>


                <button type="button" id="login" onClick={() => toggleLog()} style={{ border: 'none', borderRadius: '5%', color: 'rgb(125, 145, 233)', margin: '15px', padding: '12px', fontWeight: 'bolder', fontVariant: 'all-small-caps', fontStretch: "semi-expanded", float: 'right' }}>{buttonLName}</button >
                {!signUpIsOpen && logIsOpen && <LogIn />}
                <button type="button" id="signup" onClick={() => toggleSign()} style={{ border: 'none', borderRadius: '5%', color: 'rgb(125, 145, 233)', margin: '15px', padding: '12px', fontWeight: 'bold', float: 'right' }} >{buttonSName}</button >
                {!logIsOpen && signUpIsOpen && <SignUpContainer />}

            </div>

            <div style={{ marginTop: '18vh', marginLeft: '3vw', width: '90%', display: 'grid', gridTemplateRows: '12vh', gridTemplateColumns: 'auto auto auto auto auto', justifyContent: 'space-evenly' }}>
                <h1 style={{ width: '40%', gridColumn: '1/4', gridRow: '1', color: 'grey ', fontVariant: 'small-caps', fontStyle: 'oblique', fontFamily: 'Copperplate "Courier New" monospace', fontSize: '4.8vw' }}>
                    Welcome
                </h1>
                <div style={{ width: '100%', marginTop: '5vh', padding: '4vh', gridRow: '2', gridColumn: '1/4', background: 'rgb(235, 235, 235)' }}>
                    <p>
                        Sometime it's hard to keep track of what services you may acquire. That's why we offer you a solution
                        in which we aim to improve users economy by providing useful information of their accounts.
                </p>
                    <h4 style={{ fontStyle: 'italic', fontWeight: 'lighter', marginLeft: '1vw', width: '100%' }}> - WEB APP TEAM FOUNDERS</h4>
                </div>
                <img style={{ marginTop: '8vh', marginLeft: '2vw', gridColumn: '4', gridRow: '1' }} alt='logo' src={backgr} width="800" height="530" ></img>
                <h3 style={{ gridRow: '4', gridColumn: '1', marginTop: '2vw', padding: '1vh', color: 'yellowgreen' }}>Our Services </h3>
                <p style={{ gridRow: '4', gridColumn: '2/4', marginTop: '2vw', padding: '1vh' }}> Show users how much the services cost in total monthly.</p>
                <p style={{ gridRow: '5', gridColumn: '2/4', marginTop: '2vw', padding: '1vh' }}> List active subscriptions our users create and their billing dates.</p>
                <p style={{ gridRow: '6', gridColumn: '2/4', marginTop: '2vw', padding: '1vh' }}> Display calendar with billing or payment dates.</p>
            </div>
            <h1 style={{ margin: ' 10vh 40vw' }}> Join Us Now </h1>
            <button type="button" id="signup" onClick={() => toggleSign()} style={{ border: 'none', borderRadius: '5%', color: 'yellowgreen', marginLeft: '37vw', marginBottom: '10vh', padding: '10vh', fontSize: '3vw', fontWeight: 'bold' }} >{buttonSName}</button >
            {!logIsOpen && signUpIsOpen && <SignUpContainer />}

            <footer style={{ display: 'flex', flexDirection: 'row', marginTop: '20vh', width: '100%', padding: '2vh 25vh', borderTop: '0.3vh solid rgb(105, 222, 238)' }}>
                <a href="../public/index.html" class="bar-item" style={{ color: "#fff" }}><img alt='logo' src={logo} width="458" height="68" ></img></a>
                <p style={{ padding: '5vh 2vh' }}> &#169; Subscription App Manager |</p>
                <a href="terms" style={{ padding: '5vh 2vh' }} > Terms and Conditions</a>
            </footer>
        </Fragment >

    )

}

// function signNav() {
//     ReactDOM.render(<SignUpContainer />, document.getElementById('root'));
// }
// function logNav() {
//     ReactDOM.render(<LogInContainer />, document.getElementById('root'));
// }
export default TopNavBar;