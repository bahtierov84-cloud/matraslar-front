import React, { useState } from "react";
import "./product.css";
import { categoriesData, productsData } from "../../assets/data";
import OrderModal from "../modal/OrderModal";
import modal1 from "../../img/modal1.png";
import modal2 from "../../img/modal2.png";

// Добавляем интерфейс
interface ProductProps {
    onOrderClick: () => void;
}

// Добавляем интерфейс в FC
const Product: React.FC<ProductProps> = ({ onOrderClick }) => {
    const [activeTab, setActiveTab] = useState<number>(1);

    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    const [activeModalImg, setActiveModalImg] = useState<string>(modal1);
    const modalGallery = [modal1, modal2];

    const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
    const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [customerName, setCustomerName] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");
    const [chosenProductTitle, setChosenProductTitle] = useState<string>("");

    const handleOpenOrderModal = (product: (typeof productsData)[0]) => {
        const categoryObj = categoriesData.find(
            (cat) => cat.id === product.categoryId,
        );

        setChosenProductTitle(product.title);
        setSelectedCategory(categoryObj ? categoryObj.name : "");
        setIsOrderModalOpen(true);

        // Вызываем переданный проп
        onOrderClick();
    };

    const closeOrderModal = () => {
        setIsOrderModalOpen(false);
        setIsOrderSuccess(false);
        setQuantity(1);
        setSelectedCategory("");
        setCustomerName("");
        setCustomerPhone("");
    };

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (customerName.trim().length < 2) {
            return;
        }

        console.log("Muvaffaqiyatli mahsulot buyurtmasi:", {
            customerName,
            customerPhone: `+998 ${customerPhone}`,
            chosenCategory: selectedCategory,
            quantity: quantity,
            productTitle: chosenProductTitle,
        });
        setIsOrderSuccess(true);
    };

    const openImageModal = (product: (typeof productsData)[0]) => {
        setActiveModalImg(product.image);
        setIsImageModalOpen(true);
    };

    const displayProducts =
        activeTab === 1
            ? productsData
            : productsData.filter(
                  (product: any) => product.categoryId === activeTab,
              );

    return (
        <section className='product' id='products'>
            <div className='product__container container'>
                <div className='product__content'>
                    <h1 className='product__title'>Bizning mahsulotlar</h1>
                </div>

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

                <div className='products-list'>
                    {displayProducts.map((product) => (
                        <article key={product.id} className='product-card'>
                            <div className='product-card__left'>
                                <div className='product-card__badges'>
                                    {product.badges &&
                                        product.badges.map((badge, idx) => (
                                            <span
                                                key={idx}
                                                className={`product-card__badge product-card__badge--${badge.type}`}>
                                                {badge.text}
                                            </span>
                                        ))}
                                </div>

                                <button
                                    className='product-card__zoom-btn'
                                    onClick={() => openImageModal(product)}
                                    type='button'>
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2.5'>
                                        <circle cx='11' cy='11' r='8'></circle>
                                        <line
                                            x1='21'
                                            y1='21'
                                            x2='16.65'
                                            y2='16.65'></line>
                                        <line
                                            x1='11'
                                            y1='8'
                                            x2='11'
                                            y2='14'></line>
                                        <line
                                            x1='8'
                                            y1='11'
                                            x2='14'
                                            y2='11'></line>
                                    </svg>
                                </button>

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className='product-card__img'
                                />
                            </div>

                            <div className='product-card__right'>
                                <h2 className='product-card__title'>
                                    {product.title}
                                </h2>

                                <div className='product-card__specs'>
                                    {product.characteristics &&
                                        product.characteristics.map(
                                            (spec, idx) => (
                                                <div
                                                    key={idx}
                                                    className='product-card__spec-item'>
                                                    <span className='product-card__spec-label'>
                                                        {spec.label}
                                                    </span>
                                                    <span className='product-card__spec-value'>
                                                        {
                                                            spec.value.split(
                                                                " ",
                                                            )[0]
                                                        }
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

                                <button
                                    className='product-card__btn'
                                    onClick={() =>
                                        handleOpenOrderModal(product)
                                    }
                                    type='button'>
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

            {isImageModalOpen && (
                <div
                    className='product-modal'
                    onClick={() => setIsImageModalOpen(false)}>
                    <div
                        className='product-modal__content'
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className='product-modal__close'
                            onClick={() => setIsImageModalOpen(false)}
                            type='button'>
                            &times;
                        </button>
                        <div className='product-modal__main-img-wrap'>
                            <img
                                src={activeModalImg}
                                alt='Matras Gallereya'
                                className='product-modal__main-img'
                            />
                        </div>
                        <div className='product-modal__thumbnails'>
                            {modalGallery.map((img, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`product-modal__thumb-item ${activeModalImg === img ? "product-modal__thumb-item--active" : ""}`}
                                    onClick={() => setActiveModalImg(img)}>
                                    <img src={img} alt={`Slide ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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

export default Product;
