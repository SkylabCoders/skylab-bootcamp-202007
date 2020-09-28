import React, { useState } from 'react';
import './header.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, withRouter } from 'react-router-dom';
import LogoutButton from '../auth/logout/Logout';
import Login from '../auth/login/Login';
import { booksSearch } from '../../actions/finderActions';

function Header({ history }) {
    const [search, setSearch] = useState();
    const [selectOption, setSelectOption] = useState('title');
    const { isAuthenticated } = useAuth0();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await booksSearch(search, selectOption);
        history.push(`/search/${search}`);

        setSearch('');
    };

    return (
        <header className="header-container">
            <div className="header">
                <Link className="header-logo" to="/">
                    <img
                        alt="Logo The Great Read"
                        width="100%"
                        height="100%"
                        src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
                    />
                </Link>
                <form className="header-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search}
                        className="header-form__search"
                        placeholder="Título, autor o género..."
                        onChange={(event) => setSearch(event.target.value)}
                    ></input>
                    <select
                        className="select-css"
                        onChange={(event) =>
                            setSelectOption(event.target.value)
                        }
                    >
                        <option className="option" value="title">
                            Título
                        </option>
                        <option className="option" value="author">
                            Autor
                        </option>
                        <option className="option" value="subject">
                            Género
                        </option>
                    </select>
                </form>
                <div className="header-login">
                    <div className="header-login__button">
                        {!isAuthenticated && <Login />}
                        {isAuthenticated && (
                            <>
                                <Link
                                    id="menu"
                                    to="/auth/profile"
                                    className="icon_container"
                                >
                                    <img
                                        alt="Icono perfil usuario"
                                        className="icon_profile"
                                        widht="20px"
                                        height="20px"
                                        src="https://trello-attachments.s3.amazonaws.com/5f4906a1d69abe739ecee02f/5f56595d5b1a853f2ea0838e/4496d007bba6a1e8b81cef463c91b269/usuario_(1).png"
                                    />
                                    <LogoutButton />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default withRouter(Header);
