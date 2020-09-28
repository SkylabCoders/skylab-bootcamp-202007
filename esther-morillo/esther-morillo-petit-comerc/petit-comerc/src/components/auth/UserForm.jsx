import React from 'react';
import './profile.scss';

function UserForm(props) {
    return (
        <>
        <form onSubmit={props.onSubmit}>
            <div className="label-column">
                <label>Nom</label>
                <input
                    id="userName"
                    name="userName"
                    type="userName"
                    placeholder={props.user.name}
                    value={props.dataUser.userName}
                    onChange={props.onChange}
                />
            </div>

            <div className="label-column">
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={props.user.email}
                    value={props.dataUser.userEmail}
                    onChange={props.onChange}
                />
            </div>

            <input
                type="submit"
                className="profile-button__yellow"
                value="guardar canvis"
            />
        </form>
        </>
    );
}

export default UserForm;
