import React from 'react';
import SimpleAccordion from './SimpleAccordion';
import './detail.scss';

const BookDetailItem = ({
    book,
    isAuthenticated,
    toogleFavoriteBook,
    toggleFavoriteButton
}) => {
    return (
        <div className="container-book">
            <div className="title">
                <h1>{book.title}</h1>
                <p>{book.author}</p>
            </div>
            <div className="container-info-book">
                <div className="container-top">
                    <div className="image-container">
                        <div className="cover-image">
                            <img
                                width="200"
                                height="300"
                                src={book.image}
                                alt="Imagen libro"
                            />
                        </div>
                    </div>
                    <div className="container-ranking">
                        <p className="number-rating">{book.rating}</p>
                    </div>
                    <div className="container-button">
                        {isAuthenticated && (
                            <>
                                {!toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            event.preventDefault();
                                            toogleFavoriteBook();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/acf8c0e43f29a0a56ffc175fb33ed15e/corazon.png"
                                            alt="Icono añadir libro favorito"
                                        />
                                    </div>
                                )}
                                {toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            event.preventDefault();
                                            toogleFavoriteBook();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4906a1d69abe739ecee02f/5f4e04cfbeb95a4c21272eae/1f9f8fc08c46d03b6b6fdf0b0acd00be/corazon_(1).png"
                                            alt="Icono eliminar libro favorito"
                                        />
                                    </div>
                                )}{' '}
                            </>
                        )}{' '}
                    </div>
                </div>
                <div className="container-ranking-description">
                    <div className="description-book">
                        <p className="title-description">Resumen</p>
                        <p>{book.description}</p>
                    </div>
                </div>
            </div>
            <SimpleAccordion
                genre={book.genre}
                year={book.year}
                editorial={book.editorial}
                isbn={book.isbn}
            />
        </div>
    );
};

export default BookDetailItem;
