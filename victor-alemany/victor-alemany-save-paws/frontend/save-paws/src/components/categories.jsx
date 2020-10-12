import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoriesStore from "../stores/categoriesStore";
import { loadCategories } from "../actions/categories.actions";
import "../css/categories.scss";

function Categories() {
  const [categories, setCategories] = useState(categoriesStore.getCategories());

  useEffect(() => {
    categoriesStore.addChangeListener(onChange);
    if (categories.length === 0) loadCategories();
    return () => categoriesStore.removeChangeListener(onChange);
  }, [categories.length]);

  function onChange() {
    setCategories(categoriesStore.getCategories());
  }

  return (
    <div className="main__categories__container">
      <div className="title__categories__container">
          <div className="title__categories__container">
            <h2>Categories</h2>
            <img src="https://i.pinimg.com/564x/42/35/9f/42359ff24c392927239a23fe050a484f.jpg" alt="categories logo"></img>
          </div>
          <div className="categories__head__info">
            <p>
              Choose between the different categories if you want to see all the alerts of a specific animal:
            </p>
          </div>
        </div>
      <ul className="category__list__container">
        {categories?.map((category) => (
          <li key={category?._id} className="category__list__item">
            <Link to={`/categories/alerts/${category.kind}`}>
              <img
                className="list__category__image"
               
                src={category?.image}
                alt="list animal" />
              
              <div className="category__title__container"><p className="category__title">{category?.kind}</p></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
