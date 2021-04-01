import React from 'react';
import './Signup.css';
import * as Yup from 'yup';



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

const SignUpSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters long')
    .required('Required'),
})

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt saepe eveniet a illo beatae
          amet ab. Perferendis libero tenetur inventore cupiditate exercitationem dolore quidem mollitia accusantium
          ipsa. Qui, praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt saepe eveniet a illo beatae
          amet ab. Perferendis libero tenetur inventore cupiditate exercitationem dolore quidem mollitia accusantium
          ipsa. Qui, praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt saepe eveniet a illo beatae
          amet ab. Perferendis libero tenetur inventore cupiditate exercitationem dolore quidem mollitia accusantium
          ipsa. Qui, praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt saepe eveniet a illo beatae
          amet ab. Perferendis libero tenetur inventore cupiditate exercitationem dolore quidem mollitia accusantium
          ipsa. Qui, praesentium!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex odio sequi quibusdam officiis neque
          corrupti esse ad dicta voluptate alias, molestias soluta? Corporis debitis doloribus sequi veniam est? Dicta, dolor.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio qui nemo praesentium maiores vel
          repellendus aut, quibusdam, quisquam deleniti at asperiores laboriosam consectetur quasi eum modi rem, voluptates amet!
        </text>
      </div>
      <FormCheckBox id="terms" label="I agree to the terms and conditions." required />
      <FormButton title="Sign Up" onClick="" />
    </form>
  </div>
);

export default SignUpContainer;