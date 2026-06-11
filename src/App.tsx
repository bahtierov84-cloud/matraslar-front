import React, { useState } from "react";
import Nav from "./section/nav/nav";
import Header from "./section/header/header";
import Intro from "./section/intro/intro";
import Stats from "./section/stats/stats";
import Product from "./section/products/product";
import Discount from "./section/discount/discount";
import Ingredient from "./section/ingredient/ingredient";
import About from "./section/rectangle/rect";
import Adv from "./section/advantages/adv";
import AddressesSection from "./section/address/add";
import Info from "./section/info/info";
import Footer from "./section/footer/footer";
import OrderModal from "./section/modal/OrderModal";
import "./App.css";

const App: React.FC = () => {
    // Состояния для модального окна Хедера
    const [isHeaderModalOpen, setIsHeaderModalOpen] = useState<boolean>(false);
    const [isHeaderOrderSuccess, setIsHeaderOrderSuccess] =
        useState<boolean>(false);
    const [customerName, setCustomerName] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");

    // Функция обработки клика в товаре
    const handleProductOrderClick = () => {
        console.log("Клик по товару");
        // Здесь можно открыть модалку, если нужно
    };

    const closeHeaderModal = () => {
        setIsHeaderModalOpen(false);
        setIsHeaderOrderSuccess(false);
        setCustomerName("");
        setCustomerPhone("");
    };

    const handleHeaderOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (customerName.trim().length < 2) return;

        console.log("Muvaffaqiyatli umumiy buyurtma (Header):", {
            customerName,
            customerPhone: `+998 ${customerPhone}`,
            productTitle: "Umumiy konsultatsiya / Matraslar.uz",
        });

        setIsHeaderOrderSuccess(true);
    };

    // Весь JSX должен быть здесь, вне функций
    return (
        <div className='App'>
            <Nav />
            <Header />
            <Intro />

            <Stats />

            {/* Исправленный вызов: просто передаем ссылку на функцию */}
            <Product onOrderClick={handleProductOrderClick} />

            <Discount />
            <Ingredient />
            <About />
            <Adv />
            <AddressesSection />
            <Info />
            <Footer />

            {/* Модальное окно для Хедера */}
            {isHeaderModalOpen && (
                <OrderModal
                    isOpen={isHeaderModalOpen}
                    isSuccess={isHeaderOrderSuccess}
                    onClose={closeHeaderModal}
                    onSubmit={handleHeaderOrderSubmit}
                    customerName={customerName}
                    setCustomerName={setCustomerName}
                    customerPhone={customerPhone}
                    setCustomerPhone={setCustomerPhone}
                    selectedCategory=''
                    setSelectedCategory={() => {}}
                    quantity={1}
                    onIncrement={() => {}}
                    onDecrement={() => {}}
                />
            )}
        </div>
    );
};

export default App;
