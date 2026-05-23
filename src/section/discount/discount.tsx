import React from "react";
import "./discount.css"; // Отдельные стили для акций
// Импортируем только нужный изолированный массив акций
import { discountProductsData } from "../../assets/data";

const Discount: React.FC = () => {
    return (
        <section className='discount'>
            <div className='discount__container container'>
                {/* Заголовок секции акций по центру */}
                <div className='discount__content'>
                    <h1 className='discount__title'>Aksiyadagi mahsulotlar</h1>
                </div>

                {/* Список только акционных карточек */}
                <div className='discount-list'>
                    {discountProductsData.map((product) => (
                        <article key={product.id} className='discount-card'>
                            {/* Левая часть: фото и бейдж */}
                            <div className='discount-card__left'>
                                <div className='discount-card__badges'>
                                    {product.badges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className={`discount-card__badge discount-card__badge--${badge.type}`}>
                                            {badge.text}
                                        </span>
                                    ))}
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className='discount-card__img'
                                />
                            </div>

                            {/* Правая часть: инфо */}
                            <div className='discount-card__right'>
                                <h2 className='discount-card__title'>
                                    {product.title}
                                </h2>

                                {/* Характеристики */}
                                <div className='discount-card__specs'>
                                    {product.characteristics.map((spec, idx) => (
                                        <div key={idx} className='discount-card__spec-item'>
                                            <span className='discount-card__spec-label'>
                                                {spec.label}
                                            </span>
                                            <span className='discount-card__spec-value'>
                                                {spec.value.split(" ")[0]}
                                                <span className='discount-card__spec-unit'>
                                                    {spec.value.split(" ")[1] || ""}
                                                </span>
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <p className='discount-card__desc'>
                                    {product.description}
                                </p>

                                {/* Цены */}
                                <div className='discount-card__price-block'>
                                    <span className='discount-card__price-label'>
                                        Narxi
                                    </span>
                                    <div className='discount-card__price-wrap'>
                                        {product.oldPrice && (
                                            <span className='discount-card__price-old'>
                                                {product.oldPrice}
                                            </span>
                                        )}
                                        <span className='discount-card__price-current'>
                                            {product.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Кнопка "Xarid qilish" */}
                                <button className='discount-card__btn'>
                                    Xarid qilish
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

export default Discount;