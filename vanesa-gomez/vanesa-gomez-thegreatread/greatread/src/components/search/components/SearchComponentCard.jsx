import React from 'react';
import './searchComponentCard.scss';
import { Link } from 'react-router-dom';

function SearchComponentCard({ id, image, title, author, averageRating }) {
    return (
        <>
            <div className="card-container" key={id}>
                <Link to={`/book/${id}`} className="image">
                    <img
                        width="100%"
                        height="100%"
                        src={image}
                        alt={'Cover libro'}
                    />
                </Link>
                <div className="title-rating">
                    <div className="title-author">
                        <p className="title">{title}</p>
                        <p>{author}</p>
                    </div>
                    <div className="rating">
                        <p>{averageRating}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchComponentCard;
