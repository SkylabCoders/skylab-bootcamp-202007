import React from 'react';
import './signup.sass';

function Signup() {
  return (
    <div>
      <h3>Sign up and enjoy tendering:</h3>
      <div className="signUp">
        <form className='signUpForm' action='' method='POST'>
          <div className='formBody'>
            <div className='formSection'>
              <div className='form-group'>
                <label htmlFor='username'>User name</label>
                <input id='username' type='text' name='username' value='' className='form-control' placeholder='your full name' required onChange={()=>{}}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' value='' minlenght='8' maxLength='32' className='form-control' placeholder='password' required onChange={()=>{}}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='passwordConfirm'>Confirm password</label>
                <input id='passwordConfirm' type='password' name='passwordConfirm' value='' minlenght='8' maxLength='32' className='form-control' placeholder='password confirmation' required onChange={()=>{}}></input>
              </div>
            </div>
            <div className='formSection'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' value='' className='form-control' placeholder='email' required onChange={()=>{}}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='organization'>Organization</label>
                <input id='organization' type='text' name='organization' value='' className='form-control' placeholder='organization' required onChange={()=>{}}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Role in the organization</label>
                <input id='role' type='text' name='role' value='' className='form-control' placeholder='role' required onChange={()=>{}}></input>
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-default btn-centered'>Register</button>
        </form>   
      </div>
    </div>
  );
}

export default Signup;