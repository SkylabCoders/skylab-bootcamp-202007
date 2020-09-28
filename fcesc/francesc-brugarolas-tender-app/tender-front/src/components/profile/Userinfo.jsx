import React, { useState } from 'react';
import './userinfo.sass';
import { formatDate } from './../../tools/formatDate';

function Userinfo({ user }) {
  const [ userName, setUserName ] = useState( user.name );
  const [ userEmail, setUserEmail ] = useState( user.email );
  const [ updated_at ] = useState( formatDate(user.updated_at, { time: true, date: 'long' }) );
  const [ userOrganizationName, setUserOrganizationName ] = useState('');
  const [ userOrganizationRole, setUserOrganizationRole ] = useState('');
  const [ userOrganizationNick, setUserOrganizationNick ] = useState('');
  const [ editableForm, setEditableForm ] = useState( false );

  return (
    <section className='userDataForm'>
      <h3>Edit your user data:</h3>
      <div className="userInfo">
        <form className='signUpForm' action='' method='POST'>
          <div className='formBody'>
            <div className='formSection'>
              <img className='formPicture' src={user.picture} alt={`Avatar picture of ${user.name}`} />
            </div>
            <div className='formSection'>
              <div className='form-group'>
                <label htmlFor='username'>User name</label>
                <input id='username' type='text' name='username' value={userName} className='form-control' placeholder='your full name' required onChange={(event)=>{setUserName(event.target.value)}} disabled={!editableForm}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' value={userEmail} className='form-control' placeholder='email' required onChange={(event)=>{setUserEmail(event.target.value)}} disabled={!editableForm}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Last updated</label>
                <input id='email' type='email' name='email' value={updated_at} className='form-control' placeholder='email' disabled readOnly></input>
              </div>
            </div>
            <div className='formSection'>
              <div className='form-group'>
                <label htmlFor='organization'>Organization</label>
                <input id='organization' type='text' name='organization' value='' className='form-control' placeholder='organization' onChange={(event)=>{setUserOrganizationName(event.target.value)}} disabled={!editableForm}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Role in the organization</label>
                <input id='role' type='text' name='role' value='' className='form-control' placeholder='role' onChange={(event)=>{setUserOrganizationRole(event.target.value)}} disabled={!editableForm}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Your nickname or reference within the organization</label>
                <input id='role' type='text' name='role' value='' className='form-control' placeholder='role' onChange={(event)=>{setUserOrganizationNick(event.target.value)}} disabled={!editableForm}></input>
              </div>
            </div>
          </div>
          {(!editableForm)
            ? <button className='btn btn-default btn-centered' onClick={(event)=>{event.preventDefault(); setEditableForm(!editableForm)}}>Update your data</button>
            : <div>
                <button type='submit' className='btn btn-default btn-centered'>Submit updated data</button>
                <button className='btn btn-default btn-centered' onClick={(event)=>{event.preventDefault(); setEditableForm(!editableForm)}}>Discard changes</button>
              </div>
          }
        </form>   
      </div>
    </section>
  );
}

export default Userinfo;