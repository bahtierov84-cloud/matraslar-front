import React, { useState } from "react";
import "./discount.css"; 
import { discountProductsData } from "../../assets/data";
import OrderModal from "../modal/OrderModal"; 

const Discount: React.FC = () => {
    // Состояния для управления модальным окном и данными заказа
    const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
    const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [customerName, setCustomerName] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");
    const [selectedProduct, setSelectedProduct] = useState<(typeof discountProductsData)[0] | null>(null);

    const openOrderModal = (product: (typeof discountProductsData)[0]) => {
        setSelectedProduct(product);
        setIsOrderModalOpen(true);
    };

    const closeOrderModal = () => {
        setIsOrderModalOpen(false);
        setIsOrderSuccess(false);
        setQuantity(1);
        setSelectedCategory("");
        setSelectedProduct(null);
        setCustomerName("");
        setCustomerPhone("");
    };

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log("Muvaffaqiyatli aksiya buyurtmasi:", {
            customerName,
            customerPhone: `+998 ${customerPhone}`,
            productId: selectedProduct?.id,
            productTitle: selectedProduct?.title,
            productPrice: selectedProduct?.price,
            chosenCategory: selectedCategory,
            quantity,
        });
        setIsOrderSuccess(true); 
    };

    return (
        <section className='discount' id='discount'>
            <div className='discount__container container'>
                <div className='discount__content'>
                    <h1 className='discount__title'>Aksiyadagi mahsulotlar</h1>
                </div>

                <div className='discount-list'>
                    {discountProductsData.map((product) => (
                        <article key={product.id} className='discount-card'>
                            <div className='discount-card__left'>
                                <div className='discount-card__badges'>
                                    {product.badges?.map((badge, idx) => (
                                        <span key={idx} className={`discount-card__badge discount-card__badge--${badge.type}`}>
                                            {badge.text}
                                        </span>
                                    ))}
                                </div>
                                <img src={product.image} alt={product.title} className='discount-card__img' />
                            </div>

                            <div className='discount-card__right'>
                                <h2 className='discount-card__title'>{product.title}</h2>

                                <div className='discount-card__specs'>
                                    {product.characteristics?.map((spec, idx) => {
                                        // Разделение значения характеристики на число и единицу измерения
                                        const parts = spec.value.split(" ");
                                        return (
                                            <div key={idx} className='discount-card__spec-item'>
                                                <span className='discount-card__spec-label'>{spec.label}</span>
                                                <span className='discount-card__spec-value'>
                                                    {parts[0]}
                                                    <span className='discount-card__spec-unit'>
                                                        {parts[1] || ""}
                                                    </span>
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className='discount-card__desc'>{product.description}</p>

                                <div className='discount-card__price-block'>
                                    <span className='discount-card__price-label'>Narxi</span>
                                    <div className='discount-card__price-wrap'>
                                        {product.oldPrice && <span className='discount-card__price-old'>{product.oldPrice}</span>}
                                        <span className='discount-card__price-current'>{product.price}</span>
                                    </div>
                                </div>

                                <button className='discount-card__btn' type='button' onClick={() => openOrderModal(product)}>
                                    Xarid qilish
                                    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
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

            <OrderModal 
                isOpen={isOrderModalOpen}
                isSuccess={isOrderSuccess}
                onClose={closeOrderModal}
                onSubmit={handleOrderSubmit}
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </section>
    );
};

export default Discount;