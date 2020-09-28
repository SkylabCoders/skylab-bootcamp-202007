import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';
import { createUser, loadUser } from '../../../actions/userActions';
import userStore from '../../../stores/userStore';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());

    useEffect(() => {
        userStore.addChangeListener(onChange);

        if (user) {
            loadUser(user?.sub);
        }
        return () => userStore.removeChangeListener(onChange);
    }, [user]);

    function onChange() {
        setUserLoaded(userStore.getUser());
    }

    if (isAuthenticated) {
        createUser({
            userEmail: user.email,
            sub: user.sub,
            userNickname: user.nickname
        });
    }
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        isAuthenticated &&
        userLoaded && (
            <div className="profile-container">
                <div className="nickname-container">
                    <h1 className="nickname-item"> Hola {user.nickname}!</h1>
                </div>
                <div className="image-container">
                    <img src={user.picture} alt="Imagen de perfil de usuario" />
                </div>
                {userLoaded.favoriteBooks.length > 0 && (
                    <div className="favorite-books-container">
                        <div className="pageHeadLine">
                            <h1>Mis libros favoritos</h1>
                        </div>
                        <div className="bookShelves">
                            {userLoaded &&
                                userLoaded.favoriteBooks?.map((book) => (
                                    <div
                                        className="bookShelfList"
                                        key={`${book.id}`}
                                    >
                                        <div
                                            to={`/book/${book.id}`}
                                            className="book"
                                        >
                                            <Link
                                                to={`/book/${book.id}`}
                                                className="bookCover"
                                            >
                                                <img
                                                    src={`${book.image}`}
                                                    alt="Cover libro"
                                                    width="200"
                                                    height="300"
                                                />
                                            </Link>
                                            <div className="book-details">
                                                <p className="bookTitle">
                                                    {book.title}
                                                </p>
                                                <p className="bookAuthor">
                                                    por {book.author}
                                                </p>
                                                <p className="bookRating">
                                                    {book.averageRating}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default Profile;
