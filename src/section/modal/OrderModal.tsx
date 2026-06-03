import React from "react";
import "./OrderModal.css";
import { categoriesData } from "../../assets/data";
import group3660Img from "../../assets/img/Group 3660.png";

interface OrderModalProps {
    isOpen: boolean;
    isSuccess: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
    customerName: string;
    setCustomerName: (value: string) => void;
    customerPhone: string;
    setCustomerPhone: (value: string) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
    isOpen,
    isSuccess,
    onClose,
    onSubmit,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    selectedCategory,
    setSelectedCategory,
    quantity,
    onIncrement,
    onDecrement,
}) => {
    // Предотвращаем рендер, если модалка закрыта
    if (!isOpen) return null;

    return (
        /* Оверлей с обработчиком закрытия при клике на фон */
        <div className='order-modal-overlay' onClick={onClose}>
            <div
                className='order-modal-container'
                /* stopPropagation критически важен: клики внутри модалки не должны закрывать её */
                onClick={(e) => e.stopPropagation()}>
                
                <button
                    className='order-modal__close'
                    onClick={onClose}
                    type='button'
                    aria-label='Close modal'>
                    <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                        <path
                            d='M1 1L13 13M13 1L1 13'
                            stroke='#002C47'
                            strokeWidth='2'
                            strokeLinecap='round'
                        />
                    </svg>
                </button>

                {!isSuccess ? (
                    /* 1-Й ЭКРАН: ФОРМА ЗАКАЗА */
                    <form onSubmit={onSubmit} className='order-modal__form'>
                        <h2 className='order-modal__title'>Buyurtma qilish</h2>

                        {/* Валидация имени: только буквы (включая узбекские символы) + автокапитализация */}
                        <div className='order-modal__field'>
                            <input
                                type='text'
                                placeholder='Ismingizni yozing'
                                required
                                minLength={2}
                                value={customerName}
                                onChange={(e) => {
                                    const inputVal = e.target.value;
                                    const onlyLetters = inputVal.replace(
                                        /[^a-zA-Zа-яА-ЯёЁўЎқҚғҒҳҲ\s]/g,
                                        "",
                                    );
                                    const capitalized = onlyLetters.replace(
                                        /(^\S|\s\S)/g,
                                        (match) => match.toUpperCase(),
                                    );
                                    setCustomerName(capitalized);
                                }}
                                /* Визуальная индикация слишком короткого ввода */
                                className={`order-modal__input ${customerName.length > 0 && customerName.trim().length < 2 ? "order-modal__input--invalid-letter" : ""}`}
                            />
                        </div>

                        {/* Поле телефона: маскирование в формате XX XXX XX XX для визуального комфорта */}
                        <div className='order-modal__field phone-field-wrap'>
                            <div className='phone-prefix'>+998</div>
                            <input
                                type='tel'
                                placeholder='XX XXX XX XX'
                                required
                                value={customerPhone}
                                onChange={(e) => {
                                    const digits = e.target.value.replace(/\D/g, "");
                                    const trimmed = digits.slice(0, 9);
                                    let formatted = trimmed;
                                    
                                    // Логика автоматической расстановки пробелов
                                    if (trimmed.length > 2) formatted = `${trimmed.slice(0, 2)} ${trimmed.slice(2)}`;
                                    if (trimmed.length > 5) formatted = `${trimmed.slice(0, 2)} ${trimmed.slice(2, 5)} ${trimmed.slice(5)}`;
                                    if (trimmed.length > 7) formatted = `${trimmed.slice(0, 2)} ${trimmed.slice(2, 5)} ${trimmed.slice(5, 7)} ${trimmed.slice(7)}`;
                                    
                                    setCustomerPhone(formatted);
                                }}
                                className='order-modal__input phone-input'
                            />
                        </div>

                        {/* Селект с скрытым плейсхолдером (патттерн для принудительного выбора) */}
                        <div className='order-modal__field'>
                            <label className='order-modal__label'>
                                Mahsulotlarni toifasini tanlang
                            </label>
                            <div className='select-arrow-wrap'>
                                <select
                                    className='order-modal__select'
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    required>
                                    <option value='' disabled hidden></option>
                                    {categoriesData
                                        .filter((cat) => cat.id !== 1)
                                        .map((cat) => (
                                            <option key={cat.id} value={cat.name}>
                                                {cat.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        {/* Счетчик с контролем типа button, чтобы не сабмитить форму раньше времени */}
                        <div className='order-modal__field'>
                            <label className='order-modal__label'>Miqdorni tanlang</label>
                            <div className='order-modal__counter'>
                                <button type='button' onClick={onDecrement} className='counter-btn'>-</button>
                                <span className='counter-value'>{quantity}</span>
                                <button type='button' onClick={onIncrement} className='counter-btn'>+</button>
                            </div>
                        </div>

                        <button type='submit' className='order-modal__submit-btn'>
                            Yuborish
                        </button>
                    </form>
                ) : (
                    /* 2-Й ЭКРАН: ЭКРАН УСПЕШНОГО РЕЗУЛЬТАТА */
                    <div className='order-modal__success'>
                        <h2 className='order-modal__title success-title'>
                            Arizangiz muvaffaqiyatli yuborildi
                        </h2>

                        <div className='success-illustration'>
                            <img src={group3660Img} alt='Muvaffaqiyatli yakunlandi' className='success-illustration__img' />
                        </div>

                        <p className='success-description'>
                            Tez orada operatorlarimiz siz bilan bog'lanishadi
                        </p>

                        <button type='button' className='order-modal__submit-btn' onClick={onClose}>
                            Ok
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderModal;