function filterArray(favoriteBooks, book) {
    let newArray = [];

    const check = favoriteBooks.some((elem) => {
        return elem === book.id || (elem && elem.id === book.id);
    });

    if (check) {
        newArray = favoriteBooks.filter((elem) => elem && elem.id !== book.id);
    } else {
        newArray = [...favoriteBooks, book];
    }
    return newArray;
}

module.exports = { filterArray };
