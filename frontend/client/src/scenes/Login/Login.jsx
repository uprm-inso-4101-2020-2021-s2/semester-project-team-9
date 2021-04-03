import React from 'react';
import { NavLink } from 'react-router-dom';



const LogInContainer = () => {

    return (
        <div id='LogInContainerBackground'>
            <div id='LogInContainer'>
                {/* <button type="button" className="closeX" onClick={closeX}> Close </button > */}
                <LogInHeader title="Welcome Back!" />
                <LogInForm />
            </div>
        </div>
    )
}
// Closes sign up pop-up
// function closeX() {
//     if (document.getElementById('LogInContainer').style.display !== 'none') {
//         //add reset of sign up input values
//         document.getElementById('LogInContainer').style.display = 'none';
//     }
// }

const LogInHeader = props => (
    <div id='LogInHeader'>
        <div id='LogInHeaderTitle'>
            {props.title}
        </div>
    </div>
);



onsubmit = (values, actions) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }, 1000);
};


const FormInput = props => (
    <div className='LogInRow'>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

const FormCheckBox = props => (
    <div className='LogInRow'>
        <input id={props.id} type='checkbox' />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
);

const FormButton = props => (
    <div className='LogInRow'>
        <button type='button'><NavLink to ="/select">{props.title}</NavLink></button>
    </div>
);

const LogInForm = props => (
    <div id='LogInFormContainer'>

        <form id="LogInForm" >
            <FormInput type="text" placeholder="Email" required> Email</FormInput>
            <FormInput type="password" placeholder="Password" required>Password</FormInput>
            <FormButton title="LogIn" onClick="" />
        </form>
    </div>
);

export default LogInContainer;