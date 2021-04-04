import React from 'react';



const SignUpContainer = () => {

  return (
    <div id='signUpContainerBackground'>
      <div id='signUpContainer'>
        {/* <button type="button" className="closeX" onClick={closeX}> Close </button > */}
        <SignUpHeader title="Sign Up!" />
        <SignUpForm />
      </div>
    </div>
  )
}
// Closes sign up pop-up
// function closeX() {
//   if (document.getElementById('signUpContainer').style.display !== 'none') {
//     //add reset of sign up input values
//     document.getElementById('signUpContainer').style.display = 'none';
//   }
// }

const SignUpHeader = props => (
  <div id='signUpHeader'>
    <div id='signUpHeaderTitle'>
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
  <div className='signUpRow'>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const FormCheckBox = props => (
  <div className='signUpRow'>
    <input id={props.id} type='checkbox' />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

const FormButton = props => (
  <div className='signUpRow'>
    <button type='button'>{props.title}</button>
  </div>
);

const SignUpForm = props => (
  <div id='signUpFormContainer'>

    <form id="signUpForm" >
      <FormInput name="firstName" type="text" placeholder="First Name" pattern=" " required> First Name</FormInput>
      <FormInput name="lastName" type="text" placeholder="Last Name" required>Last Name </FormInput>
      <FormInput type="text" placeholder="Email" required> Email</FormInput>
      <FormInput type="password" placeholder="Password" required>Password</FormInput>
      <FormInput type="password" placeholder="Confirmation" required> Confirm Password </FormInput >
      <br />
      <div className="terms-container">
        <text>
          To access the application the user must accept the terms and conditions. By using this application the user is wilfully presenting which subscription 
          services they are subscribed to and how much money they are spending on these services. This information will be protected but it may be used anonymously
          to gather information on which the services popularity, correlations among their userbases and how much money are customers spending on these services.
        </text>
      </div>
      <FormCheckBox id="terms" label="I agree to the terms and conditions." required />
      <FormButton title="Sign Up" onClick="" />
    </form>
  </div>
);

export default SignUpContainer;