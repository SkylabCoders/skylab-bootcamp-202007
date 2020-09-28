import React, { useState, useEffect } from 'react';
import './home.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

function Home(props) {
    const [actionBooksList, setActionBookList] = useState([]);
    const [suspenseBookList, setSuspenseBookList] = useState([]);
    const [fantasyBookList, setFantasyBookList] = useState([]);

    async function fetchData(query) {
        let params = {
            params: { subject: query }
        };
        const response = await axios.get('/api/books', params);

        switch (query) {
            case 'fantasy':
                setFantasyBookList(response.data);
                break;
            case 'action':
                setActionBookList(response.data);
                break;
            case 'suspense':
                setSuspenseBookList(response.data);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        fetchData('fantasy');
        fetchData('action');
        fetchData('suspense');
    }, []);

    return (
        <>
            <div className="slider__text">
                <p className="slider__title">FANTASIA</p>
            </div>

            <section className="slider-container">
                <div className="slider__content">
                    {fantasyBookList.length <= 0 && <LoadingPage />}
                    {fantasyBookList.length > 0 &&
                        fantasyBookList.map((book) => (
                            <div
                                className="slider__content-wrapper"
                                key={book.id}
                            >
                                <div className="slider__item">
                                    <div className="slider__content">
                                        <Link to={`/book/${book.id}`}>
                                            <img
                                                alt={book.title}
                                                className="slider__image"
                                                src={book.image}
                                            />
                                            <div className="slider__tem-text">
                                                <div className="book-rating">
                                                    {book.averageRating}
                                                </div>
                                                <div className="book-title">
                                                    {book.title}
                                                </div>
                                                <div className="book-author">
                                                    {book.author}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            <div className="slider__text">
                <p className="slider__title">ACCIÓN</p>
            </div>

            <section className="slider-container">
                <div className="slider__content">
                    {actionBooksList.length <= 0 && <LoadingPage />}
                    {actionBooksList.length > 0 &&
                        actionBooksList.map((book) => (
                            <div
                                className="slider__content-wrapper"
                                key={book.id}
                            >
                                <div className="slider__item">
                                    <div className="slider__content">
                                        <Link to={`/book/${book.id}`}>
                                            <img
                                                alt={book.title}
                                                className="slider__image"
                                                src={book.image}
                                            />
                                            <div className="slider__tem-text">
                                                <div className="book-rating">
                                                    {book.averageRating}
                                                </div>
                                                <div className="book-title">
                                                    {book.title}
                                                </div>
                                                <div className="book-author">
                                                    {book.author}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            <div className="slider__text">
                <p className="slider__title">SUSPENSE</p>
            </div>

            <section className="slider-container">
                <div className="slider__content">
                    {suspenseBookList.length <= 0 && <LoadingPage />}
                    {suspenseBookList.length > 0 &&
                        suspenseBookList.map((book) => (
                            <div
                                className="slider__content-wrapper"
                                key={book.id}
                            >
                                <div className="slider__item">
                                    <div className="slider__content">
                                        <Link to={`/book/${book.id}`}>
                                            <img
                                                alt={book.title}
                                                className="slider__image"
                                                src={book.image}
                                            />
                                            <div className="slider__tem-text">
                                                <div className="book-rating">
                                                    {book.averageRating}
                                                </div>
                                                <div className="book-title">
                                                    {book.title}
                                                </div>
                                                <div className="book-author">
                                                    {book.author}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}

export default Home;
