import React, { useState } from "react";
import "./product.css";
// Импортируем обе группы данных из вашего файла data.ts
import { categoriesData, productsData } from "../../assets/data";

const Product: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <section className='product'>
            <div className='product__container container'>
                {/* Заголовок секции */}
                <div className='product__content'>
                    <h1 className='product__title'>Bizning mahsulotlar</h1>
                </div>

                {/* Категории (Табы) */}
                <ul className='categories__list'>
                    {categoriesData.map((category) => (
                        <li
                            key={category.id}
                            className={`categories__item ${activeTab === category.id ? "categories__item--active" : ""}`}
                            onClick={() => setActiveTab(category.id)}>
                            {category.name}
                        </li>
                    ))}
                </ul>

                {/* Список карточек товаров */}
                <div className='products-list'>
                    {productsData.map((product) => (
                        <article key={product.id} className='product-card'>
                            {/* Левая часть карточки: фото и бейджи */}
                            <div className='product-card__left'>
                                <div className='product-card__badges'>
                                    {product.badges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className={`product-card__badge product-card__badge--${badge.type}`}>
                                            {badge.text}
                                        </span>
                                    ))}
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className='product-card__img'
                                />
                            </div>

                            {/* Правая часть карточки: описание и характеристики */}
                            <div className='product-card__right'>
                                <h2 className='product-card__title'>
                                    {product.title}
                                </h2>

                                <div className='product-card__specs'>
                                    {product.characteristics.map(
                                        (spec, idx) => (
                                            <div
                                                key={idx}
                                                className='product-card__spec-item'>
                                                <span className='product-card__spec-label'>
                                                    {spec.label}
                                                </span>
                                                <span className='product-card__spec-value'>
                                                    {spec.value.split(" ")[0]}
                                                    <span className='product-card__spec-unit'>
                                                        {spec.value.split(
                                                            " ",
                                                        )[1] || ""}
                                                    </span>
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>

                                <p className='product-card__desc'>
                                    {product.description}
                                </p>

                                <div className='product-card__price-block'>
                                    <span className='product-card__price-label'>
                                        Narxi
                                    </span>
                                    <div className='product-card__price-wrap'>
                                        {product.oldPrice && (
                                            <span className='product-card__price-old'>
                                                {product.oldPrice}
                                            </span>
                                        )}
                                        <span className='product-card__price-current'>
                                            {product.price}
                                        </span>
                                    </div>
                                </div>

                                <button className='product-card__btn'>
                                    Buyurtma berish
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'>
                                        <circle cx='9' cy='21' r='1'></circle>
                                        <circle cx='20' cy='21' r='1'></circle>
                                        <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
