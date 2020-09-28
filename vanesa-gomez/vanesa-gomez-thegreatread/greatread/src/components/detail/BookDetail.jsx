import React, { useEffect, useState } from 'react';
import searchStore from '../../stores/searchStore';
import { loadBookById } from '../../actions/listActions';
import BookDetailItem from './BookDetailItem';
import { useAuth0 } from '@auth0/auth0-react';
import userStore from '../../stores/userStore';
import { loadUser, favoriteBook } from '../../actions/userActions';

function BookDetail({ match }) {
    const { user, isAuthenticated } = useAuth0();
    const [mongoUser, setMongoUser] = useState(userStore.getUser());
    const [book, setBook] = useState(
        searchStore.getBookById(match.params.bookId)
    );

    const [toggleFavoriteButton, setToggleFavoriteButton] = useState(
        userStore.isFavorite(match.params.bookId)
    );

    useEffect(() => {
        searchStore.addChangeListener(onChange);

        if (!book) {
            loadBookById(match.params.bookId);
        }

        return () => {
            searchStore.removeChangeListener(onChange);
        };
    }, [book, match.params.bookId]);

    function onChange() {
        setBook(searchStore.getBookById());
        setMongoUser(userStore.getUser());
    }

    useEffect(() => {
        userStore.addChangeListener(onFavChange);

        if (user) {
            loadUser(user?.sub);
        }

        return () => {
            userStore.removeChangeListener(onFavChange);
        };
    }, [user]);

    function onFavChange() {
        setToggleFavoriteButton(userStore.isFavorite(match.params.bookId));
    }

    return (
        <>
            {book && (
                <BookDetailItem
                    isAuthenticated={isAuthenticated}
                    toogleFavoriteBook={() =>
                        favoriteBook(mongoUser?.sub, book)
                    }
                    toggleFavoriteButton={toggleFavoriteButton}
                    book={book}
                />
            )}
        </>
    );
}

export default BookDetail;
